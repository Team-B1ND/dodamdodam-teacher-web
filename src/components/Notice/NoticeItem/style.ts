import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";



export const NoticeItem = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 8px;
    width: 100%;
    min-height: 115px;
    padding: 16px;
    ${DodamShape.ExtraSmall}
    background-color: ${({theme})=>theme.backgroundNormal};
`

export const NoticeHeader = styled.div`
    display: flex;
    gap: 3px;
    width: 100%;
    ${DodamTypography.Label.Regular};
    color: ${({theme})=>theme.labelAssisitive};
`

export const NoticeTitle = styled.div`
    width: 100%;
    ${DodamTypography.Heading2.Bold}
    color: ${({theme})=>theme.labelStrong};
`
export const NoticeContent = styled.div`
    width: 100%;
    height: 100%;
    ${DodamTypography.Label.Regular};
    color: ${({theme})=>theme.labelNormal};
     white-space: pre-wrap; 
`

