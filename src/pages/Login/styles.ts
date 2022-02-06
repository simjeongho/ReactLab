import styled from "styled-components";

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
export const LoginInput = styled.input`
  background-color: olivedrab;
  color: black;
  font-size: 1.5rem;
  border-radius: 30px;
`;

export const LoginButton = styled.button`
  border-style: dashed;
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
