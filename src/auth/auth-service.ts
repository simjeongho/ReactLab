import axios from "axios";
import { AxiosInstance } from "axios";
import { LoginRequest, LoginResult } from "./types";

class AuthService {
	private base: AxiosInstance;

	constructor() {
		this.base = axios.create({
			baseURL: "/login",
		});
	}

	async login(data: LoginRequest) {
		const testlogin = "/testlogin";
		const response = await this.base.post(testlogin, data);
		const result: LoginResult = await response.data;

		const {
			data: { admin, message },
		} = result;

		return result;
	}
}

export default AuthService;
