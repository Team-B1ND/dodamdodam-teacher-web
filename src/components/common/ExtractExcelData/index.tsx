import * as ExcelJS from "exceljs";
import { RiFileExcel2Line } from "react-icons/ri";
import styled from "styled-components";

type ExcelRowData = Record<string, string | number | boolean | null | undefined>;

interface ExtractExcelDataProps {
  excelData: ExcelRowData[]; 
  fileName: string;
  sheetName?: string;
}

const ExtractExcelData = ({ 
  excelData, 
  fileName, 
  sheetName = "Sheet1" 
}: ExtractExcelDataProps) => {
  
  const handleDownload = async () => {
    try {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet(sheetName);

      if (excelData.length === 0) {
        alert("다운로드할 데이터가 없습니다.");
        return;
      }

      const headers = Object.keys(excelData[0]);
      worksheet.addRow(headers);

      //데이터 행 추가
      excelData.forEach((item: ExcelRowData) => {
        const row = headers.map(header => String(item[header] ?? ""));
        worksheet.addRow(row);
      });

      const totalRows = excelData.length + 1; //헤더 포함
      const totalCols = headers.length;

      //헤더 스타일링
      const headerRow = worksheet.getRow(1);
      headerRow.eachCell((cell) => {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'EBEBEB' } 
        };
        cell.font = {
          bold: true,
          size: 12
        };
        cell.alignment = {
          vertical: 'middle',
          horizontal: 'center'
        };
        cell.border = {
          top: { style: 'thin', color: { argb: 'FF000000' } },
          left: { style: 'thin', color: { argb: 'FF000000' } },
          bottom: { style: 'thin', color: { argb: 'FF000000' } },
          right: { style: 'thin', color: { argb: 'FF000000' } }
        };
      });

      //데이터 행 스타일링
      for (let rowIndex = 2; rowIndex <= totalRows; rowIndex++) {
        const row = worksheet.getRow(rowIndex);
        for (let colIndex = 1; colIndex <= totalCols; colIndex++) {
          const cell = row.getCell(colIndex);
          
          cell.border = {
            top: { style: 'thin', color: { argb: 'FF000000' } },
            left: { style: 'thin', color: { argb: 'FF000000' } },
            bottom: { style: 'thin', color: { argb: 'FF000000' } },
            right: { style: 'thin', color: { argb: 'FF000000' } }
          };
          
          cell.alignment = {
            vertical: 'middle',
            horizontal: 'center'
          };
        }
      }

      //칼럼 너비 자동 조정
      worksheet.columns.forEach((column, index) => {
        const header = headers[index];
        let maxLength = header.length;
        
        excelData.forEach((item: ExcelRowData) => {
          const cellValue = String(item[header] ?? "");
          if (cellValue.length > maxLength) {
            maxLength = cellValue.length;
          }
        });
        
        if (column) {
          column.width = Math.min(Math.max(maxLength + 2, 10), 50);
        }
      });

      //파일 생성 및 다운로드
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { 
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
      });
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${fileName}.xlsx`;
      link.click();
      
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Excel 파일 생성 중 오류:', error);
      alert('Excel 파일 생성에 실패했습니다.');
    }
  };

  return (
    <ExcelButton onClick={handleDownload}>
      <RiFileExcel2Line size={16} />
      <span>다운로드</span>
    </ExcelButton>
  );
};

export default ExtractExcelData;

const ExcelButton = styled.button`
  width: 95px;
  height: 35px;
  border: none;
  border-radius: 5px;
  padding: 3px;
  font-size: 14px;
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
    background-color: #196c3a;
  }
  
  &:active {
    transform: scale(0.97);
  }
`;