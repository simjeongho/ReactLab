import { all, call } from "redux-saga/effects";
import user from "./userSaga";
import createSagaMiddleware from "@redux-saga/core";

export default function* rootSaga() {
  yield all([call(user)]);
}
