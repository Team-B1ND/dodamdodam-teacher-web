import styled from "styled-components";



export const NoticeSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
`

export const NoneDataText = styled.div`
  width: 100%;
  height: 100%;

  font-size: 17px;
  font-weight: 400;
  padding-top: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
`;