import { LoginRequest } from "./../../auth/types";
//import { loginRequest } from "@store/slice/user";
import delay from "../../apis/delay";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
//import newLogin from "../../feature/login";

export type InitialState = {
	id: string;
	password: string;
	loginState: boolean;
	admin: boolean;
	isLoggingIn: boolean;
	message: string;
};

export type UserData = {
	id: string;
	password: string;
	admin: boolean;
};

const initialState: InitialState = {
	id: "",
	password: "",
	loginState: false,
	admin: false,
	isLoggingIn: false,
	message: "",
};

export const newLogin = createAsyncThunk("user/newLogIn", async () => {
	const result = await delay(1000, {
		id: "jeongho",
		password: "daeun",
	});
	return result;
});
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginRequestAction(state) {
			state.isLoggingIn = true;
		},
		loginSuccess(state) {
			//state.id = action.payload;
			// state.password = action.payload;
			state.loginState = true;
			state.isLoggingIn = false;
		},
		loginFailure(state) {
			state.loginState = false;
			state.isLoggingIn = false;
		},
		helloSaga(sdfd) {
			console.log("hello Saga reducer 불림 ");
		},

		setUser(state, action: PayloadAction<LoginRequest>) {
			state.id = action.payload.id;
			state.password = action.payload.password;
		},
		setAdmin(state) {
			state.admin = true;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(newLogin.pending, (state, action) => {
			state.isLoggingIn = true;
		});
		builder.addCase(newLogin.fulfilled, (state, action) => {
			state.isLoggingIn = false;
		});
		builder.addCase(newLogin.rejected, (state) => {
			state.isLoggingIn = false;
		});
	},
});

export default userSlice;
export const { loginRequestAction, loginSuccess, loginFailure, helloSaga, setUser, setAdmin } = userSlice.actions;
