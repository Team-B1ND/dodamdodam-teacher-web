import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";



export const NoticeItem = styled.div`
    cursor: pointer;
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
    align-items: center;
    gap: 3px;
    width: 100%;
    span{
    ${DodamTypography.Label.Regular};
    color: ${({theme})=>theme.labelAssistive};
    }
    
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

export const NoticeImg = styled.div<{ imageCount: number }>`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: ${({ imageCount }) => (imageCount === 1 ? "flex-start" : "space-around")};
    gap: 8px;
    margin-top: 8px;
  
    img {
        width: 23vw;
        height: 23vw;
        object-fit: cover;
        border-radius: 8px;
        ${DodamShape.Medium}
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
`;

export const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    ${DodamTypography.Title1.Regular}
`;

export const NoticeFiles = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 5px;
`
