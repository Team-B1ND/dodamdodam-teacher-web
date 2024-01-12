import { Button, Table, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { BUS_REGIST_TITLE_ITEMS } from "./constant";
import { TextField } from "@mui/material";
import * as S from "./style";
import { useRegistBus } from "../../../../../hooks/Bus/useRegistBus";

interface Props {
  closeBusRegister: () => void;
}
const BusRegisterForm = ({ closeBusRegister }: Props) => {
  const {
    handleBusContentChange,
    busContent,
    timeRequired,
    handleBusContentBusSubmit,
  } = useRegistBus();

  return (
    <S.BusForm onSubmit={(e) => handleBusContentBusSubmit(e, closeBusRegister)}>
      <Table customStyle={S.TableStyle}>
        <TR customStyle={S.TitleTRStyle}>
          {BUS_REGIST_TITLE_ITEMS.map((item, idx) => (
            <TD
              key={idx}
              customStyle={idx === 4 ? S.LastTitleTDStyle : S.TitleTDStyle}
            >
              {item}
            </TD>
          ))}
        </TR>

        <TR customStyle={S.InputTRStyle}>
          <TD customStyle={S.InputTDStyle}>
            <S.BusInput
              value={busContent.busName}
              placeholder="버스 이름을 입력하세요"
              name="busName"
              onChange={handleBusContentChange}
              autoComplete="off"
            />
          </TD>

          <TD customStyle={S.InputTDStyle}>
            <S.BusInput
              value={busContent.description}
              placeholder="버스 설명을 입력하세요"
              name="description"
              onChange={handleBusContentChange}
              autoComplete="off"
            />
          </TD>

          <TD customStyle={S.InputTDStyle}>
            <TextField
              type="datetime-local"
              name="leaveTime"
              value={busContent.leaveTime}
              variant={"standard"}
              onChange={handleBusContentChange}
              style={S.DateTimePickerStyle}
            />
          </TD>

          <TD customStyle={S.InputTDStyle}>
            <div>
              <S.TimeRequiredInput
                name="hour"
                value={timeRequired.hour}
                onChange={handleBusContentChange}
                autoComplete="off"
              />
              시간
            </div>

            <div>
              <S.TimeRequiredInput
                name="minute"
                value={timeRequired.minute}
                onChange={handleBusContentChange}
                autoComplete="off"
              />
              분
            </div>
          </TD>

          <TD customStyle={S.LastInputTDStyle}>
            <S.BusInput
              type="number"
              min={1}
              value={busContent.peopleLimit}
              placeholder="인원 제한 수를 입력하세요"
              name="peopleLimit"
              onChange={handleBusContentChange}
              autoComplete="off"
            />
          </TD>
        </TR>
      </Table>

      <S.ButtonContainer>
        <Button type="submit" ButtonType="agree" style={S.RegistButton}>
          확인
        </Button>
      </S.ButtonContainer>
    </S.BusForm>
  );
};

export default BusRegisterForm;
