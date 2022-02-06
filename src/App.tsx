import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
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
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Layout>
  );
};
export default App;
