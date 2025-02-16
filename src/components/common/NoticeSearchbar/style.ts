import styled from "styled-components";
import { DodamShape, DodamTypography } from "@b1nd/dds-web";

export const SearchBarContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    background-color: ${({theme})=>theme.backgroundNormal};
    ${DodamShape.Small}
    span{
        color: ${({theme})=>theme.labelAlternative};
        ${DodamTypography.Heading2.Medium};
        cursor: pointer;
    }
`
export const SearchBarInput = styled.input`
    width: 85%;
    height: 80%;
    border: none;
    border-bottom: 1px solid ${({theme})=>theme.lineNormal};
    ${DodamTypography.Body1.Medium};
    color: ${({theme})=>theme.labelAlternative};
    &:focus{
        outline:none;
    }
`

export const IconImg = styled.div`
    position: absolute;
    right: 15%;
`