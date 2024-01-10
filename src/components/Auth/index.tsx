import * as S from "./style";
import AuthPanelImg from "../../assets/Auth/panel.svg";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <S.AuthContainer>
      <S.AuthBox>
        <S.AuthMain>
          <S.AuthImgBox>
            <S.TextBox>
              <S.Title>더 나은 학교를 위해 함께하는</S.Title>
              <S.Title>B1ND 스마트스쿨</S.Title>
              <S.Line />
              <S.SubTitle>새로워진 도담도담티처, 만나 보세요.</S.SubTitle>
            </S.TextBox>
            <S.Img src={AuthPanelImg} />
            <S.AuthInputBox>
              <div>
                {isLogin ? (
                  <Login setIsLogin={setIsLogin} />
                ) : (
                  <Signup setIsLogin={setIsLogin} />
                )}
              </div>
            </S.AuthInputBox>
          </S.AuthImgBox>
        </S.AuthMain>
      </S.AuthBox>
    </S.AuthContainer>
  );
};

export default Auth;
