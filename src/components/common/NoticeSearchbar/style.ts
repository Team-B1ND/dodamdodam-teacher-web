import styled from "styled-components";
import { DodamShape } from "@b1nd/dds-web";

export const SearchBarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: ${({theme})=>theme.backgroundNormal};
    ${DodamShape.Small}
`
export const SearchBarInput = styled.input`
    width: 80%;
`