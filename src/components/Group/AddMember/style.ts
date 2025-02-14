import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const AddMemberContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;  
    gap: 12px;
    overflow: hidden;
`

export const AddMemberBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 15px;
    width: 100%;
    height: 100%;
    background-color: ${({theme})=>theme.backgroundNormal};
    ${DodamShape.ExtraSmall};
`

export const AddMemberTitle = styled.div`
    display: flex;
    align-items: center;
    p{
        cursor: pointer;
        ${DodamTypography.Heading1.Bold}
        color: ${({theme})=>theme.labelNormal};
    }
`

export const AddMemberDataBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;
    padding: 10px 0 10px 0;
    width: 100%;
    height: 485px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
`

export const AddMemberButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    height: 48px;
    gap: 8px;
`


export const AddMemberItemBox = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    height: 48px;
    padding: 0 10px 0 10px;
    ${DodamShape.ExtraSmall}
    p{
        ${DodamTypography.Body1.Medium};
        color: ${({theme})=>theme.labelNormal};
    }
    &:hover{
        background-color: ${({theme})=>theme.fillNeutral}; 
    }
`


