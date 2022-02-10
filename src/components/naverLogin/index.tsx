import React from "react";
const { naver } = window as any;

const initializeNaverLogin = () => {
	const naverLogin = new naver.LoginWithNaverId({
		clientId: "i8xSsHM52VtZykOOq0cO",
		callbackUrl: "http://localhost:3000/",
		isPopup: false, //popup 형식으로 띄울 것인지 설정
		loginButton: { color: "white", type: 1, height: "40" },
	});
	naverLogin.init();
};

export default initializeNaverLogin;
