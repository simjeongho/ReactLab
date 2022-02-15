import { ApiResult } from "./../store/slice/user";
export type LoginRequest = {
	id: string;
	password: string;
};

export type LoginResult = ApiResult<{
	loginRequest: LoginRequest;
	admin: boolean;
	message: string;
}>;
