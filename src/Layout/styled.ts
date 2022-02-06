import styled from "styled-components";

export const LayoutContainer = styled.section`
  position: sticky;
  top: 0;
  width: 100%;
  height: 20vh;
  padding-right: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const LayoutHeader = styled.header`
  height: 10%;
  width: 100%;
  display: flex;
  background-color: olivedrab;
  justify-content: center;
`;
