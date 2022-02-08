//import { loginRequest } from "@store/slice/user";
import delay from "../../apis/delay";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import newLogin from "../../feature/login";

export type InitialState = {
  id: string;
  password: string;
  loginState: boolean;
  admin: boolean;
  isLogginIn: boolean;
};

const initialState: InitialState = {
  id: "",
  password: "",
  loginState: false,
  admin: false,
  isLogginIn: false,
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
    loginRequest(state) {
      state.isLogginIn = true;
    },

    loginSuccess(state) {
      //state.id = action.payload;
      // state.password = action.payload;
      state.loginState = true;
      state.isLogginIn = false;
    },
    loginFailure(state) {
      state.isLogginIn = false;
    },
    isLoggingIn(state) {
      state.isLogginIn = true;
    },
    helloSaga(sdfd) {
      console.log("hello Saga reducer 불림 ");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(newLogin.pending, (state, action) => {
      state.isLogginIn = true;
    });
    builder.addCase(newLogin.fulfilled, (state, action) => {
      state.isLogginIn = false;
    });
    builder.addCase(newLogin.rejected, (state) => {
      state.isLogginIn = false;
    });
  },
});

export default userSlice;
export const { loginRequest, loginSuccess, loginFailure, helloSaga } =
  userSlice.actions;