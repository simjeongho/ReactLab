import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import TestMocking from "./component/Mocking/TestMocking";
import SWRProfile from "./component/SWRexample";
//import Login from "@pages/Login/index";
//import Login from "./pages/Login/index";
const Login = lazy(() => import("./pages/Login/index"));

const App = () => {
	return (
		<Layout>
			<Suspense fallback={null}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/test" element={<TestMocking />} />
						<Route path="/swr" element={<SWRProfile />} />
					</Routes>
				</BrowserRouter>
			</Suspense>
		</Layout>
	);
};
export default App;
