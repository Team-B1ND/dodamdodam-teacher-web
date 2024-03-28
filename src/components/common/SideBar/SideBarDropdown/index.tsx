import MenuDropdownChild from "../../MenuDropdown/MenuDropdownChild";
import MenuDropdownWrapper from "../../MenuDropdown/MenuDropdownWrapper";
import MenuItem from "../../MenuItem";
import { SideBarDropdownContainer } from "./style";

const SideBarDropdown = () => {
  return (
    <SideBarDropdownContainer>
      <MenuItem title="구성원" redirectUrl="/member" />
      <MenuItem title="결석" redirectUrl="/absent" />
      <MenuDropdownWrapper title="버스">
        <MenuDropdownChild title="날짜별 버스 조회" redirectUrl="/bus-date" />
        <MenuDropdownChild title="버스 전체기록 조회" redirectUrl="/bus-list" />
      </MenuDropdownWrapper>
      <MenuDropdownWrapper title="외출 / 외박">
        <MenuDropdownChild title="외출" redirectUrl="/offbase-pass" />
        <MenuDropdownChild title="외박" redirectUrl="/offbase-leave" />
        <MenuDropdownChild
          title="외박 중인 학생"
          redirectUrl="/offbase-leave-ing"
        />
      </MenuDropdownWrapper>
      <MenuDropdownWrapper title="상벌점">
        <MenuDropdownChild
          title="기숙사 점수 관리"
          redirectUrl="/PointScore?type=DORMITORY"
        />
        <MenuDropdownChild
          title="기숙사 상벌점 사유"
          redirectUrl="/PointReason?type=DORMITORY"
        />
        <MenuDropdownChild
          title="학교 점수 관리"
          redirectUrl="/PointScore?type=SCHOOL"
        />
        <MenuDropdownChild
          title="학교 점수 사유"
          redirectUrl="/PointReason?type=SCHOOL"
        />
      </MenuDropdownWrapper>
      <MenuDropdownWrapper title="2차 심자">
        <MenuDropdownChild
          title="심자신청 수락/거절"
          redirectUrl="/nightStudy-allow"
        />
        <MenuDropdownChild
          title="심자중인 학생"
          redirectUrl="/nightStudy-today"
        />
      </MenuDropdownWrapper>
      <MenuDropdownChild title="학사일정 관리" redirectUrl="/schedule" />
      <MenuItem title="문자보내기" redirectUrl="/sms" />
    </SideBarDropdownContainer>
  );
};

export default SideBarDropdown;
