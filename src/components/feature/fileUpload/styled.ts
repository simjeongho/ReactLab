import styled from "styled-components";

export const FileUploadContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const FileUploadForm = styled.form`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FileInput = styled.input`
	display: none;
`;

export const FileUploadButton = styled.button`
	color: black;
`;

export const ShowFileImage = styled.img`
	width: 30%;
	height: 30%;
`;
