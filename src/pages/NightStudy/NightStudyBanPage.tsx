import SectionHeaderProvider from "../../components/common/SectionHeaderProvider";
import NightStudyBan from "../../components/NightStudy/NightStudyBan";

export const NightStudyBanPage = () => {
  return (
    <SectionHeaderProvider
      title="심자신청 정지"
      subTitle="심자신청을 못하도록 정지할 수 있습니다."
    >
      <NightStudyBan/>
    </SectionHeaderProvider>
  )
}