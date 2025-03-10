import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 200px;
  padding: 18px;
  gap: 10px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.ExtraLarge}
  p {
    ${DodamTypography.Heading1.Bold}
    color:${({ theme }) => theme.labelStrong};
  }
`
export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 38px;
  justify-content: flex-end;
  align-items: center;
`
