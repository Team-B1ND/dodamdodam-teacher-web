import styled from "styled-components";
import { AuthPartFadeh } from "../style";

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;

  color: rgb(204, 204, 204);
  font-size: 17px;
  font-weight: 400;

  margin-top: 20px;
  margin-left: -20px;

  cursor: pointer;

  p {
    font-size: 18px;

    margin-left: 2%;
    font-weight: 600;
    color: rgb(0, 103, 188);
  }
`;

export const SignupWrap = styled.div`
  animation: ${AuthPartFadeh} 1s;
`;
