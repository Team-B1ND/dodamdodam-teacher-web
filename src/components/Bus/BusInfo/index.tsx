import * as S from "./style";
import { ArrowLeft, DodamModal } from "@b1nd/dds-web";
import { useDeleteBus } from "hooks/Bus/useDeleteBus";
import { useRecoilValue } from "recoil";
import { SelectBusDataAtom } from "stores/Bus/bus.store";
import { Dispatch, useState } from "react";
import { SetStateAction } from "react";
import { DodamFilledButton } from "@b1nd/dds-web";
import { useGetBusDetailQuery } from "queries/Bus/bus.query";
import BusModifyModal from "../BusModifyModal";
import BusManage from "../BusManage";
import ErrorBoundary from "components/common/ErrorBoundary";
import BusInfoSkeleton from "./BusInfoSkeleton";
import BusStudentItem from "./BusStudentItem";

interface BusInfoProps {
  setSection: Dispatch<SetStateAction<string>>;
}


const BusInfo = ({ setSection }: BusInfoProps) => {
const selectedBus = useRecoilValue(SelectBusDataAtom);
const { handleDeleteBusClick } = useDeleteBus({ setSection });
const { data, isLoading } = useGetBusDetailQuery(selectedBus.bus.id);
const [isOpenModal, setIsOpenModal] = useState(false);
const [isOpenBusMember, setIsOpenBusMember] = useState(false);

if (isLoading) {
  return <BusInfoSkeleton setSection={setSection} />;
}

return (
  <S.WaitingMemberContainer>
    <S.WaitingMemberWrap>
      <S.WaitingMemberHeader>
        <S.BackIconWrap onClick={() => setSection("main")}>
          <ArrowLeft size={24} color="labelNormal" />
        </S.BackIconWrap>
        <S.WaitingMemberTitle>
          <h1>{data?.name}</h1>
          <div style={{ display: "flex" }}>
            <DodamFilledButton
              size={"Medium"}
              backgroundColorType="Negative"
              text="버스 삭제"
              typography={["Body2", "Medium"]}
              width={88}
              onClick={() => handleDeleteBusClick(data!.id)}
              customStyle={{ width: "fit-content", marginRight: "12px" }}
            />
            <DodamFilledButton
              size={"Medium"}
              backgroundColorType="Secondary"
              text="정보 수정"
              typography={["Body2", "Medium"]}
              width={88}
              onClick={() => setIsOpenModal(true)}
              customStyle={{ width: "fit-content" }}
            />
            <DodamFilledButton
              size={"Medium"}
              backgroundColorType="Primary"
              text="인원 수정"
              typography={["Body2", "Medium"]}
              width={88}
              customStyle={{ width: "fit-content", marginLeft: "12px" }}
              textTheme={"staticWhite"}
              onClick={() => setIsOpenBusMember(true)}
            />
          </div>
        </S.WaitingMemberTitle>
      </S.WaitingMemberHeader>
      <S.WaitingMemberList>
        <S.ListWrap>
          <p>학생</p>
          <S.ListItemWrap>
            <ErrorBoundary text="데이터를 불러오지 못했습니다." showButton={true}>
            {data?.users
              ?.slice()
              .sort((a, b) => {
                const order = {
                  BEFORE_BOARDING: 0,
                  BOARDED: 1,
                  UNBOARDED: 2,
                };
                return order[a.boardingType] - order[b.boardingType];
              })
              .map((user, idx) => (
                <BusStudentItem key={idx} student={user} />
              ))}
            </ErrorBoundary>
          </S.ListItemWrap>
        </S.ListWrap>
      </S.WaitingMemberList>
    </S.WaitingMemberWrap>

    <BusModifyModal
      isOpen={isOpenModal}
      isClose={() => setIsOpenModal(false)}
    />

    <DodamModal isOpen={isOpenBusMember} $background={true}>
      <BusManage onClose={() => setIsOpenBusMember(false)}/>
    </DodamModal>
  </S.WaitingMemberContainer>
);
};

export default BusInfo;