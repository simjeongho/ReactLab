import { loginFailure, loginSuccess } from "@store/slice/user";
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
				data: { message },
			} = await authService.login(data);
			if (status >= 400) {
				console.log("login fail");
				dispatch(loginFailure());
			}
			if (status === 200) {
				dispatch(loginSuccess());
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
