import { all, call } from "redux-saga/effects";
import user from "./userSaga";
import createSagaMiddleware from "@redux-saga/core";
export const delay1 = (ms: number) => new Promise((res) => setTimeout(res, ms));
export default function* rootSaga() {
	yield all([call(user)]);
}
