import { ReactNode } from "react";
import { CSSObject } from "styled-components";
import { Table, THead, TH, TR, TableScrollWrapper } from "@b1nd/b1nd-dodam-ui";
import * as S from "./style";

interface Props {
  constant: string[];
  children: ReactNode;

  tableStyle?: CSSObject;
  tHeadStyle?: CSSObject;
  trStyle?: CSSObject;
  thStyle?: CSSObject;
  tablSrollStyle?: CSSObject;
}

const TableAttribute = ({ ...attr }: Props) => {
  const { tableStyle, tHeadStyle, trStyle, thStyle, tablSrollStyle } = attr;

  return (
    <Table customStyle={tableStyle || S.TableStyle}>
      <THead customStyle={tHeadStyle}>
        <TR customStyle={trStyle || S.TrStyle}>
          {attr.constant.map((item, idx) => (
            <TH key={idx} customStyle={thStyle || S.ThStyle}>
              {item}
            </TH>
          ))}
        </TR>
      </THead>

      <TableScrollWrapper customStyle={tablSrollStyle || S.TableScrollStyle}>
        <>{attr.children}</>
      </TableScrollWrapper>
    </Table>
  );
};

export default TableAttribute;
