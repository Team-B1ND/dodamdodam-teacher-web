import styled from "styled-components";

export const AuthButtonContainer = styled.button<{
  width: number;
  top: number;
}>`
  background-color: rgba(0, 103, 188, 0.85);
  color: white;

  border: 0;
  border-radius: 5px;

  width: ${(props) => props.width}px;
  height: 45px;

  font-size: 17px;

  margin-top: ${(props) => props.top}px;
`;
