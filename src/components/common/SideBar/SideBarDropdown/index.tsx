import MenuDropdownChild from '../../MenuDropdown/MenuDropdownChild'
import MenuDropdownWrapper from '../../MenuDropdown/MenuDropdownWrapper'
import MenuItem from '../../MenuItem'
import { SideBarDropdownContainer } from './style'

const SideBarDropdown = () => {
  return (
    <SideBarDropdownContainer>
      <MenuItem title='구성원' redirectUrl='/member' />
      {/* <MenuDropdownWrapper title="버스">
        <MenuDropdownChild title="날짜별 버스 조회" redirectUrl="/bus-date" />
        <MenuDropdownChild title="버스 전체기록 조회" redirectUrl="/bus-list" />
      </MenuDropdownWrapper> */}
      <MenuItem title='공지' redirectUrl='notice' />
      <MenuDropdownWrapper title='외출 / 외박'>
        <MenuDropdownChild title='외출' redirectUrl='/offbase-pass' />
        <MenuDropdownChild title='외박' redirectUrl='/offbase-leave' />
        <MenuDropdownChild
          title='외박 중인 학생'
          redirectUrl='/offbase-leave-ing'
        />
        <MenuDropdownChild
          title='현재 잔류 중인 학생'
          redirectUrl='/offbase-redisual'
        />
      </MenuDropdownWrapper>
      <MenuDropdownWrapper title='동아리'>
        <MenuDropdownChild title='동아리 관리' redirectUrl='/club/manage' />
        <MenuDropdownChild title='동아리 담당' redirectUrl='/club/applicate' />
      </MenuDropdownWrapper>
      <MenuDropdownWrapper title='상벌점'>
        <MenuDropdownChild
          title='기숙사 점수 관리'
          redirectUrl='/PointScore?type=DORMITORY'
        />
        <MenuDropdownChild
          title='기숙사 상벌점 사유'
          redirectUrl='/PointReason?type=DORMITORY'
        />
        <MenuDropdownChild
          title='학교 점수 관리'
          redirectUrl='/PointScore?type=SCHOOL'
        />
        <MenuDropdownChild
          title='학교 점수 사유'
          redirectUrl='/PointReason?type=SCHOOL'
        />
      </MenuDropdownWrapper>
      <MenuDropdownWrapper title='2차 심자'>
        <MenuDropdownChild
          title='심자신청 수락/거절'
          redirectUrl='/nightStudy-allow'
        />
        <MenuDropdownChild
          title='프로젝트 심자수락/거절'
          redirectUrl='/nightStudy-project-allow'
        />
          <MenuDropdownChild
          title='심자신청 정지'
          redirectUrl='/nightStudy-ban'
        />
        <MenuDropdownChild
          title='심자중인 학생'
          redirectUrl='/nightStudy-today'
        />
      </MenuDropdownWrapper>
      <MenuDropdownChild title='학사일정 관리' redirectUrl='/schedule' />
      <MenuItem title='채용공고' redirectUrl='/cms' />
    </SideBarDropdownContainer>
  )
}

export default SideBarDropdown
