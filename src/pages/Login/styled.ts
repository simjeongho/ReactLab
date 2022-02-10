import { FormConfirmButton } from "./../../shared/form-buttons/styled";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainer = styled.form`
	display: flex;
	flex-direction: column;
	width: 60%;
	padding: 0 6%;
`;
export const LoginInput = styled.input`
	background-color: var(--color-light-gray);
	color: black;
	font-size: 1.5rem;
	border-radius: 30px;
	margin-top: 5%;
`;

export const LoginButton = styled(FormConfirmButton)`
	width: 100%;
	margin: 2% 0 6.5% 0;
`;

export const LoadingIndicatorContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoadingIndicator = styled.img`
	height: 50px;
	width: 50px;
	animation: spin 800ms infinite linear;
	@keyframes "spin" {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
`;

export const TestLinkButton = styled(Link)`
	background-color: var(--color-light-gray);
`;
