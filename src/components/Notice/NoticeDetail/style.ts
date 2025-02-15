import styled from "styled-components";
import { DodamShape, DodamTypography } from "@b1nd/dds-web";

export const NoticeDetailBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 12px;
    padding: 16px;
    ${DodamShape.ExtraSmall}
    background-color: ${({theme})=>theme.backgroundNormal};
`

export const NoticeBackButton = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 48px;
    cursor: pointer;
    span{
        ${DodamTypography.Headline.Bold};
        color: ${({theme})=>theme.labelNormal};
    }
`

export const NoticeHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 3px;
    span{
        ${DodamTypography.Headline.Medium};
        color: ${({theme})=>theme.labelAssisitive};
    }
`

export const NoticeTitle = styled.div`
    width: 100%;
    ${DodamTypography.Title2.Bold}
    color: ${({theme})=>theme.labelStrong};
`

export const NoticeContent = styled.div`
    width: 100%;
    height: 100%;
    ${DodamTypography.Body1.Regular};
    color: ${({theme})=>theme.labelNormal};
     white-space: pre-wrap; 
`


