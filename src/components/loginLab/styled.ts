import styled from "styled-components";
import { FormConfirmButton } from "@shared/form-buttons/styled";

export const LoginLabContainer = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	background-color: var(--color-blue);
`;

export const LoginLabFormInput = styled.input`
	width: 100%;
	font-size: 0.75rem;
	padding: 4.7% 5.7%;
	border-radius: 8px;
	border: 1px solid #363636;

	&::placeholder {
		color: var(--color-light-gray);
	}
`;

export const LoginLabFormLabel = styled.label`
	width: 100%;
	font-size: 0.875rem;
	padding-left: 2%;
	font-family: var(--font-nanum-bold);
`;

export const LoginLabButton = styled(FormConfirmButton)`
	width: 100%;
	margin: 2% 0 6.5% 0;
`;
