import { loginFailure, loginSuccess, loginRequestAction, setUser, setAdmin } from "@store/slice/user";
import { useDispatch } from "react-redux";
import AuthService from "@auth/auth-service";

const authService = new AuthService();
const UseLoginForm = (id: string, password: string) => {
	const dispatch = useDispatch();

	const login = async () => {
		const data = {
			id: id,
			password: password,
		};
		try {
			const {
				status,
				statusText,
				data: { admin, loginRequest },
			} = await authService.login(data);
			dispatch(loginRequestAction());
			if (status === 200) {
				dispatch(loginSuccess());
				console.log("login Success");
				//dispatch(setUser(loginRequest));
				if (admin === true) {
					dispatch(setAdmin());
				}
			} else {
				throw new Error("에러에염");
			}
		} catch (error: any) {
			console.log(`error!: ${error}`);
		}
	};

	const handleSubmitLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // 페이지 이동 막음
		login();
	};

	return [handleSubmitLoginForm];
};

export default UseLoginForm;
