import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 550px;
  height: 600px;

  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
`;
