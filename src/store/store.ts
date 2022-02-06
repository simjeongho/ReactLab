import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga/rootSaga";
const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer: {
      user: userSlice.reducer,
    },
    middleware: [sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

const store = createStore();
type RootState = ReturnType<typeof store.getState>;

export default store;
export const selectUser = (state: RootState) => state.user;
