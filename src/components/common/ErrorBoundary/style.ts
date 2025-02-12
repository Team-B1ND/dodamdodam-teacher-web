import styled from "styled-components";
import { DodamShape, DodamTypography } from "@b1nd/dds-web";

export const ErrorBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        ${DodamTypography.Body2.Medium};
        color: ${({theme})=>theme.labelStrong};
    }
`
export const ReloadButton = styled.button`
    width: 200px;
    height: 40px;
    border: none;
    ${DodamShape.Medium};
    ${DodamTypography.Body1.Bold};
    color: ${({theme})=>theme.staticWhite};
    background-color: ${({theme})=>theme.primaryNormal};
    cursor: pointer;
`