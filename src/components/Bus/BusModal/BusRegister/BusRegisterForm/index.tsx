import { Button, Table, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { useRegistBus } from "hooks/Bus/useRegistBus";
import { BUS_REGIST_TITLE_ITEMS } from "./constant";
import * as S from "./style";

interface BusRegisterFormProps {
  closeBusRegister: () => void;
}

const BusRegisterForm = ({ closeBusRegister }: BusRegisterFormProps) => {
  const { ...hooks } = useRegistBus();
  return (
    <S.BusForm
      onSubmit={(e) => hooks.handleBusContentBusSubmit(e, closeBusRegister)}
    >
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
              value={hooks.busContent.busName}
              placeholder="버스 이름을 입력하세요"
              name="busName"
              onChange={hooks.handleBusContentChange}
              autoComplete="off"
            />
          </TD>

          <TD customStyle={S.InputTDStyle}>
            <S.BusInput
              value={hooks.busContent.description}
              placeholder="버스 설명을 입력하세요"
              name="description"
              onChange={hooks.handleBusContentChange}
              autoComplete="off"
            />
          </TD>

          <TD customStyle={S.InputTDStyle}>
            <S.DateTimePicker
              type="datetime-local"
              name="leaveTime"
              value={hooks.busContent.leaveTime}
              onChange={hooks.handleBusContentChange}
            />
          </TD>

          <TD customStyle={S.InputTDStyle}>
            <div>
              <S.TimeRequiredInput
                name="hour"
                value={hooks.timeRequired.hour}
                onChange={hooks.handleBusContentChange}
                autoComplete="off"
              />
              시간
            </div>

            <div>
              <S.TimeRequiredInput
                name="minute"
                value={hooks.timeRequired.minute}
                onChange={hooks.handleBusContentChange}
                autoComplete="off"
              />
              분
            </div>
          </TD>

          <TD customStyle={S.LastInputTDStyle}>
            <S.BusInput
              type="number"
              min={1}
              value={hooks.busContent.peopleLimit}
              placeholder="인원 제한 수를 입력하세요"
              name="peopleLimit"
              onChange={hooks.handleBusContentChange}
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
