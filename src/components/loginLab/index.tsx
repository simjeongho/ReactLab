import useInput from "@hooks/useInput";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoginLabButton, LoginLabContainer, LoginLabFormInput, LoginLabFormLabel } from "./styled";
import { LoginRequest, LoginResult } from "@auth/types";
import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "@store/store";
import UseLoginForm from "@hooks/useLoginForm";

const LoginLab = () => {
	const [userid, setUserId] = useInput("");
	const [userpassword, setUserPassword] = useInput("");
	const [handleSubmitLoginLab] = UseLoginForm(userid, userpassword);
	const userInfo = useSelector(selectUser);
	useEffect(() => {
		console.log(userInfo.admin);
	}, [userInfo]);

	return (
		<>
			<LoginLabContainer onSubmit={handleSubmitLoginLab}>
				<LoginLabFormLabel>안녕하세요 로그인 실험실입니다.</LoginLabFormLabel>
				<LoginLabFormInput value={userid} onChange={setUserId} placeholder="여기는 id"></LoginLabFormInput>
				<LoginLabFormInput
					value={userpassword}
					onChange={setUserPassword}
					placeholder="여기는 비밀번호"
				></LoginLabFormInput>
				<LoginLabButton type="submit">로그인 실험실</LoginLabButton>
				{userInfo.admin ? <h1>관리자입니다. </h1> : <h1>그냥 유저입니다. </h1>}
			</LoginLabContainer>
		</>
	);
};

export default LoginLab;
