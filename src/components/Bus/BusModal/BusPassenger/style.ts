import styled from "styled-components";

export const BusPassengerWrap = styled.div`
  width: auto;
  min-width: 560px;
  height: 670px;

  background-color: #fff;
  border-radius: 10px;

  border: 2px solid #ddd;

  padding: 18px 25px 18px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const BusPassengerItemContainer = styled.div`
  width: 100%;
  height: calc(100% - 113px);

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CsvButtonContainer = styled.div`
  width: 100%;
  heigth: 60px;
  display: flex;
  justify-content: flex-end;
`;
