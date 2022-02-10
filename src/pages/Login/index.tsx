import React from "react";
import { LoginContainer, LoadingIndicatorContainer, LoadingIndicator, TestLinkButton, LoginButton } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/store";
import useInput from "../../hooks/useInput";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { loginRequest } from "../../store/slice/user";
import { PracticeAsync } from "@components/feature/login/login";
import initializeNaverLogin from "../../components/naverLogin";
import { NaverLoginBody } from "../../components/naverLogin/styled";
import { useLocation } from "react-router-dom";
import { FormInput } from "@shared/form-input/styled";
const Login = () => {
	const dispatch = useDispatch();
	const userInfo = useSelector(selectUser);
	const [userId, userIdhandler, setUserId] = useInput("");
	const [userPassword, setUserPassword] = useState("");
	const location = useLocation();
	const handleUserPassword = useCallback((e) => {
		setUserPassword(e.target.value);
	}, []);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		PracticeAsync();
		dispatch(loginRequest());
		//dispatch(newLogin()); // CreateAsyncThunk 연습
		//SagaPracticeLogin(); //saga연습
		//alert(`${userId} , ${userInfo.isLogginIn}`);
	};

	const getNaverToken = () => {
		if (!location.hash) return;
		const token = location.hash.split("=")[1].split("&")[0];
		console.log(token);
	};

	useEffect(() => {
		initializeNaverLogin();
		getNaverToken();
	}, []);
	return (
		<>
			{userInfo.isLogginIn ? (
				<LoadingIndicatorContainer>
					<LoadingIndicator src="img/loading-indicator.png" alt="loading-indicator" />
				</LoadingIndicatorContainer>
			) : (
				<LoginContainer onSubmit={handleSubmit}>
					<FormInput value={userId} onChange={userIdhandler} placeholder="아이디를 입력하시오" />
					<FormInput value={userPassword} onChange={handleUserPassword} placeholder="비밀번호를 입력하시오" />
					<LoginButton type="submit">로그인</LoginButton>
					<NaverLoginBody id="naverIdLogin" />
					<TestLinkButton to="/test">test페이지로 이동</TestLinkButton>
				</LoginContainer>
			)}
		</>
	);
};

export default Login;
