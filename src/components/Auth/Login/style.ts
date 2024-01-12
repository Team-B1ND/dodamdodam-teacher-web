import styled from "styled-components";

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;

  color: rgb(204, 204, 204);
  font-size: 17px;
  font-weight: 400;

  margin-top: 30px;

  cursor: pointer;

  p {
    font-size: 18px;

    margin-left: 2%;
    font-weight: 600;
    color: rgb(0, 103, 188);
  }
`;

export const PasswordBox = styled.div`
  display: flex;
  align-items: center;
`;
export const PasswordViewBox = styled.div`
  z-index: 10;

  font-size: 20px;

  margin-left: -16px;
  margin-top: 45px;

  color: gray;

  user-select: none;
`;
