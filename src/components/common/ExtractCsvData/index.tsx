import { CSVLink } from "react-csv";
import { RiFileExcel2Line } from "react-icons/ri";
import styled from "styled-components";

interface ExtractCsvDataProps {
  csvData: object[];
  fileName: string;
}

const ExtractCsvData = ({ csvData, fileName }: ExtractCsvDataProps) => {
  return (
    <CsvLinkButton data={csvData} filename={fileName.concat(".csv")}>
      <RiFileExcel2Line size={20} />
      <p>다운로드</p>
    </CsvLinkButton>
  );
};

export default ExtractCsvData;

export const CsvLinkButton = styled(CSVLink)`
  width: 95px;
  height: 43px;

  border-radius: 5px;
  padding: 3px;
  font-size: 16px;

  color: #fff;
  background-color: #27ae60;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;

  transform: scale(1);
  transition: all 0.18s ease-in-out;
  &:hover {
    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #a5d6a7;
  }
  &:active {
    transform: scale(0.97);
  }
`;
