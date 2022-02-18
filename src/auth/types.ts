export type LoginRequest = {
	id: string;
	password: string;
};

export type LoginResult = {
	loginRequest: LoginRequest;
	loginState: boolean;
	admin: boolean;
	message: string;
};
