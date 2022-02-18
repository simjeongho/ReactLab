import axios from "axios";
import { AxiosInstance, AxiosResponse } from "axios";
import { LoginRequest, LoginResult } from "./types";

class AuthService {
	private base: AxiosInstance;

	constructor() {
		this.base = axios.create({
			baseURL: "",
		});
	}

	async login(data: LoginRequest) {
		//const testlogin = "/testlogin";
		const loginLabRequest = "/loginlaboratory";
		const response: AxiosResponse<LoginResult> = await axios.post(loginLabRequest, data);
		return response;
	}
}

export default AuthService;
