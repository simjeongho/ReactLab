import { ApiResult } from "./../store/slice/user";
export type LoginRequest = {
	id: string;
	password: string;
};

export type LoginResult = ApiResult<{
	admin: string;
	message: string;
}>;
