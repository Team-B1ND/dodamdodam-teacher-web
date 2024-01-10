import styled from "styled-components";

export const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
  margin-left: -5px;
`;

export const CheckContent = styled.a`
  display: flex;
  align-items: center;

  margin-right: 20px;

  font-size: 17px;
  user-select: none;

  color: #7c7c7c;

  cursor: pointer;

  &:hover {
    color: rgb(124 124 124 / 50%);
    transition: color 0.1s ease-in, border-color 0.1s ease-in;
  }
`;

export const AuthButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 160px;

  margin-left: -25px;
  margin-top: -20px;
`;
