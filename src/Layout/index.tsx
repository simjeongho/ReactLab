import React, { ReactNode } from "react";
import { LayoutHeader, LayoutContainer } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/store";
type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	const dispatch = useDispatch();
	const userInfo = useSelector(selectUser);

	return (
		<>
			<LayoutContainer>
				<LayoutHeader>여기는 practice의 header</LayoutHeader>
				{children}
			</LayoutContainer>
		</>
	);
};

export default Layout;
