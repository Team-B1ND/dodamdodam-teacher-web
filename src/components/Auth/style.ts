import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #0067bc;
`;

export const AuthBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;
export const AuthMain = styled.div`
  display: flex;
  width: 1200px;
  height: 640px;

  background-color: white;
  box-shadow: 3px 10px 60px 0 rgba(41, 41, 41, 0.3);
`;

export const AuthImgBox = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 45%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(26, 26, 26, 0.8),
      rgba(26, 26, 26, 0.3)
    );
  }
`;

export const Img = styled.img`
  width: 45%;
  height: 100%;
  object-fit: cover;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 12%;
  left: 4.5%;
  color: white;
`;

export const Title = styled.span`
  font-size: 29px;
  margin-bottom: 15px;

  font-weight: medium;
  font-family: "Noto Sans KR Medium", "Noto Sans Medium";
`;

export const Line = styled.div`
  width: 22px;

  border: 0.2px solid #a1a1a1;

  margin: 35px 0px 30px 0px;
`;
export const SubTitle = styled.span`
  color: #fff;

  font-size: 17px;
  font-weight: 200;
`;

export const AuthInputBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
