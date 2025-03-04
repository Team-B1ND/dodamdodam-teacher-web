import styled from 'styled-components';
import { DodamShape, DodamTypography } from '@b1nd/dds-web';

export const WriteWrap = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.ExtraSmall};
  padding: 24px 25px 16px 25px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
`;

export const WriteTitle = styled.h1`
  color: ${({ theme }) => theme.labelNormal};

  ${DodamTypography.Heading1.Bold};
`;

export const WriteInputWrap = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    height: 10%;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.labelAlternative};

    color: ${({ theme }) => theme.labelAlternative};
    ${DodamTypography.Headline.Medium};
    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.labelAlternative};
    }
  }

  textarea {
    width: 100%;
    height: 88%;
    padding-top: 2%;

    border: none;

    color: ${({ theme }) => theme.labelAlternative};
    ${DodamTypography.Headline.Medium};

    &:focus {
      outline: none;
    }

    resize: none;
  }
`;

export const WriteFooter = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconButtonWrap = styled.div`
  width: 10%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
`;
