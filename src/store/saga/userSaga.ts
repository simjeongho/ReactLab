import { useDispatch } from "react-redux";
import { loginFailure, loginRequest, loginSuccess } from "../slice/user";
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

function* loginSaga() {
	try {
		yield call(loginPractice);
		yield put(loginSuccess());
	} catch (e) {
		console.error(e);
		yield put(loginFailure());
	}
}

function* watchLogin() {
	yield takeLatest(loginRequest, loginSaga);
}
function* helloSaga() {
	console.log("before hello saga");
	//yield take(helloSaga);
	console.log("hello saga");

	while (true) {
		yield take(loginSuccess);
		console.log("loginSuccess Watching");
		alert("loginSuccess!");
	}
}
export default function* userSaga() {
	yield all([fork(watchLogin), helloSaga()]);
}
