import { LoginRequest } from "./../../auth/types";
import AuthService from "@auth/auth-service";
import { UserData } from "./../slice/user";
import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginRequestAction, loginSuccess } from "../slice/user";
import { all, fork, takeLatest, call, put, take } from "redux-saga/effects";
import delay from "../../apis/delay";
function loginAPI() {}

async function loginPractice() {
	const result = await delay(5000, {
		id: "jeongho",
		password: "daeunSaga",
	});
	console.log(result);
	setTimeout(() => {
		console.log("사가 타임 지나는 중");
	}, 1000);

	return result;
}

async function loginMock() {
	setTimeout(() => {
		console.log("사가 타임 지나는 중");
	}, 1000);
	axios
		.post("/login", {
			data: {
				id: "jeongho",
				password: "daeunpost",
				admin: true,
			},
		})
		.then((res: AxiosResponse<UserData>) => {
			JSON.stringify(res);
			console.log(`res는 ${res}`);
			return res;
		});
}

function* loginSaga() {
	try {
		//yield call(loginPractice);
		yield call(loginMock);
		yield put(loginSuccess());
	} catch (e) {
		console.error(e);
		yield put(loginFailure());
	}
}

// function* watchLogin() {
// 	yield takeLatest(loginRequest, loginSaga);
// }
function* helloSaga() {
	console.log("before hello saga");
	//yield take(helloSaga);
	console.log("hello saga");

	while (true) {
		yield take(loginSuccess);
		console.log("loginSuccess Watching");
		alert("loginSuccess!"); //무한 watch 가능
	}
}
export default function* userSaga() {
	yield all([fork(helloSaga)]);
}
