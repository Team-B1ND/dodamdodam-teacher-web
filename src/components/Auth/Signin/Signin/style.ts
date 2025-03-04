import { DodamLightTheme } from '@b1nd/dds-web'
import styled from 'styled-components'

export const SigninWrap = styled.div`
  min-width: 340px; //일단 대충 340px까지 줄어 들게 했습니다.
  width: 50%;
  height: 55%;

  background-color: ${DodamLightTheme.backgroundNormal};

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 12px;

  @media (max-width: 1308px) {
    width: 40%;
    height: 50%;
  }

  @media (max-width: 568px) {
    width: 80%;
    height: 50%;
  }
`

export const SigninImage = styled.img`
  height: 95%;
  padding-left: 10px;
  width: 50%;

  @media (max-width: 1308px) {
    display: none;
  }
`

export const SignBox = styled.div`
  min-width: 55%;
  /* width: 55%; */
  height: 100%;
  display: flex;
  padding: 36px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  position: relative;

  @media (max-width: 1308px) {
    width: 100%;
    height: 100%;
  }
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const AccountContainer = styled.div`
  width: 100%;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -10px;

  color: ${DodamLightTheme.labelAlternative};

  p {
    color: ${DodamLightTheme.labelNormal};
    text-decoration: underline;
    cursor: pointer;
  }
`

export const NoneAccount = styled.div`
  color: ${({ theme }) => theme.labelAssisitive};

  p {
    color: ${({ theme }) => theme.labelNormal};
    text-decoration: underline;
  }
`
