import styled from "styled-components";
import {DodamShape, DodamTypography} from "@b1nd/dds-web";

export const NightStudyBanContainer = styled.div`
    width: 30%;
    height: 50%;
    background-color: ${({ theme }) => theme.backgroundNormal};
    padding: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    ${DodamShape.Large}
    
    & p {
        ${DodamTypography.Headline.Bold}
    }
`

export const DateInfoBox = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & p {
        color: black;
        ${DodamTypography.Headline.Medium}
    }
`

export const BanedReasonWrap = styled.div`
    display: flex;
    gap: 8px;
    & span {
        ${DodamTypography.Body2.Medium}
    }
`

export const BannedReasonTextArea = styled.textarea`
    ${DodamShape.Medium}
    outline: none;
    resize: none;
    border: none;
    height: 100px;
    background-color: ${({ theme }) => theme.backgroundAlternative};
    padding: 12px;
    &::placeholder {
        color: ${({ theme }) => theme.labelAlternative};
    }
`

export const BannedReasonButtonWrap = styled.div`
    justify-content: right;
    display: flex;
`