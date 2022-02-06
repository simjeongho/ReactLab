import { createAsyncThunk } from "@reduxjs/toolkit";
import delay from "../apis/delay";
import { useDispatch } from "react-redux";
import { loginRequest, helloSaga } from "../store/slice/user";

const newSagaLogin = createAsyncThunk(
  "user/logIn",
  async (data: void, thunkAPI) => {
    console.log(data);
    const result = await delay(500, {
      id: "jeongho",
      password: "daeun",
    });
    return result;
  }
);

export const SagaPracticeLogin = async () => {
  const dispatch = useDispatch();
  const result = await delay(1000, {
    id: "jeongho",
    password: "daeun",
  });
  dispatch(loginRequest());
  dispatch(helloSaga());
  console.log(result);
  return result;
};

export const PracticeAsync = async () => {
  setTimeout(() => {
    console.log("타임 지나는 중");
  }, 1000);

  const result = await delay(1000, {
    id: "jeongho",
    password: "daeun",
  });

  return result;
};

export default newSagaLogin;
