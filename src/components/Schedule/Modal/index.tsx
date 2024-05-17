import * as Schedule from "./style";
import { Flex } from "components/common/Flex/Flex";
import {
  Button,
  TD,
  TR,
  Table,
  Select,
} from "@b1nd/b1nd-dodamdodam-ui";
import {
  HOME_SCHEDULE_HEADER_COLORSET_LIST,
  SCHEDULE_PLACE_ITEMS,
  SCHEDULE_REGIST_TITLE_ITEMS,
} from "../constant";
import useCreateSchedule from "hooks/Schedule/useCreateSchedule";
import ModalHeader from "components/common/Modal/ModalHeader";

interface Props {
  close: () => void;
}

const ScheduleCreateModal = ({ close }: Props) => {
  const {
    onChangeScheduleData,
    onChangeScheduleTargetGrades,
    onSubmitScheduleData,
    scheduleData,
    setPlace,
    place,
    scheduleTargetGrades,
  } = useCreateSchedule();
  return (
    <Schedule.Container onClick={(e) => e.stopPropagation()}>
      <ModalHeader close={close} title="일정 생성하기" />
      <Table customStyle={Schedule.TableStyle}>
        <TR customStyle={Schedule.TRStyle}>
          {SCHEDULE_REGIST_TITLE_ITEMS.map((item, idx) => (
            <TD customStyle={Schedule.TDStyle} key={idx}>
              {item}
            </TD>
          ))}
        </TR>
        <TR customStyle={Schedule.FormTrStyle}>
          <TD customStyle={Schedule.FormInputTDStyle}>
            <Schedule.ScheduleNameInput
              placeholder="사유를 작성해주세요"
              name="scheduleName"
              onChange={onChangeScheduleData}
            />
          </TD>
          <TD customStyle={Schedule.FormInputTDStyle}>
            <Flex gap={5}>
              {HOME_SCHEDULE_HEADER_COLORSET_LIST.map((data) => (
                <Schedule.GradeBox
                  onClick={() => onChangeScheduleTargetGrades(data.text)}
                  isSelect={
                    scheduleTargetGrades.includes(data.text) ? true : false
                  }
                >
                  <Schedule.GradeColorBox
                    style={{ background: data.backgroundColor }}
                  />
                  {data.text}
                </Schedule.GradeBox>
              ))}
            </Flex>
          </TD>
          <TD customStyle={Schedule.FormInputTDStyle}>
            <Select
              items={SCHEDULE_PLACE_ITEMS}
              customStyle={{
                position: "absolute",
                zIndex: "5",
                minWidth: "120px",
              }}
              zIndex={10}
              onChange={setPlace}
              value={place === "" ? "장소를 선택해주세요" : place}
            />
          </TD>
          <TD customStyle={Schedule.FormInputTDStyle}>
            <Flex>
              <Schedule.DateTimePicker
                type="date"
                name="startDate"
                value={scheduleData.startDate}
                onChange={onChangeScheduleData}
              />
            </Flex>
          </TD>
          <TD customStyle={Schedule.FormTDStyle}>
            <Flex>
              <Schedule.DateTimePicker
                type="date"
                name="endDate"
                value={scheduleData.endDate}
                onChange={onChangeScheduleData}
              />
            </Flex>
          </TD>
        </TR>
      </Table>
      <Flex gap={10} justify="center" customStyle={{ marginTop: "30px" }}>
        <Button ButtonType="agree" onClick={onSubmitScheduleData}>
          확인
        </Button>
        <Button ButtonType="disagreed" onClick={close}>
          취소
        </Button>
      </Flex>
    </Schedule.Container>
  );
};

export default ScheduleCreateModal;
