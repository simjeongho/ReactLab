import useInput from "@hooks/useInput";
import { useState } from "react";
import axios from "axios";
import { LoginLabButton, LoginLabContainer, LoginLabFormInput, LoginLabFormLabel } from "./styled";
import { LoginResult } from "@auth/types";

const LoginLab = () => {
	const [userid, setUserId] = useInput("");
	const [userpassword, setUserPassword] = useInput("");
	const [admin, setadmin] = useState<Boolean>(false);
	console.log(userid);

	const handleSubmitLoginLab = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		axios.post("/loginlaboratory", { id: userid, password: userpassword }).then((res: LoginResult) => {
			const { admin } = res.data;
			if (admin === true) {
				setadmin(true);
			} else {
				setadmin(false);
			}
			const { id, password } = res.data.loginRequest;
		});
	};

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
				{admin ? <h1>관리자입니다. </h1> : <h1>그냥 유저입니다. </h1>}
			</LoginLabContainer>
		</>
	);
};

export default LoginLab;
