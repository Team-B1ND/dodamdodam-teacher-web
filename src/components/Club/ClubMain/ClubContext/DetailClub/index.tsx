import ClubMemberItem from './ClubMemberItem'
import * as S from './style'
import {
  Close,
} from '@b1nd/dds-web'
import ClubDetailSkeleton from './ClubDetailSkeleton'
import { ClubMember } from 'types/Club/club.type'
import { useClubDetail } from 'hooks/Club/useClubData'
import { useState } from 'react'

interface DetailClubProps {
  item: number
  close: () => void
  leader: ClubMember
}

const DetailClub = ({ item, close, leader }: DetailClubProps) => {
  const { club, clubApplyMembers, members, isLoading } = useClubDetail(item)
  const [selectedMember, setSelectedMember] = useState(0);

  return isLoading ? (
    <S.WrapSkeleton>
      <ClubDetailSkeleton />
    </S.WrapSkeleton>
  ) : !club ? (
    <p>동아리 데이터를 불러오지 못했습니다.</p>
  ) : (
    <S.ClubModalContainer>
      <S.ClubMiddleContainer>
        <div>
          <div onClick={close}>
            <Close $svgStyle={{ cursor: 'pointer' }} />
          </div>
          <S.ClubDescriptionWrap>
            <div>
              <S.ClubNameWrap>
                {club.data.name}
              </S.ClubNameWrap>
              <S.ClubShortDescription>
                {club.data.shortDescription}
              </S.ClubShortDescription>
            </div>
            <S.ClubApprovalContainer>
              <S.ClubLeader>
                부장 : {leader?.grade}
                {leader?.room}
                {leader?.number && leader.number < 10
                  ? `0${leader.number}`
                  : leader?.number}
                {leader.name}
              </S.ClubLeader>
            </S.ClubApprovalContainer>
          </S.ClubDescriptionWrap>
          <S.BetweenLine />
          <S.ClubInfoDetail>
            <S.ClubMemberLists>
              <div>
                <S.Member>입부 희망자</S.Member>
                <S.WrapClubMemberContainer>
                {clubApplyMembers?.map((item) => (
                  <ClubMemberItem
                    key={item.student.name}
                    name={item.student.name + `${item.student.id === selectedMember ? "(선택됨)" : ""}`}
                    grade={item.student.grade}
                    room={item.student.room}
                    profileImage={item.student.profileImage || null}
                    onClick={() => setSelectedMember(item.student.id)}
                  />
                ))}
                </S.WrapClubMemberContainer>
              </div>
              <div>
                <S.Member>정식 부원</S.Member>
                <S.WrapClubMemberContainer>
                {members?.data.students?.map((item) => (
                  <ClubMemberItem
                    key={item.name}
                    name={item.name}
                    grade={item.grade}
                    room={item.room}
                    profileImage={item.profileImage || null}
                  />
                ))}
                </S.WrapClubMemberContainer>
              </div>
            </S.ClubMemberLists>
            <S.ExplainClubWrap>
              <div>자기소개</div>
              <S.ExplainClubBox>
                {clubApplyMembers?.find(item => item.student.id === selectedMember)?.introduce}
              </S.ExplainClubBox>
            </S.ExplainClubWrap>
          </S.ClubInfoDetail>
        </div>
      </S.ClubMiddleContainer>
    </S.ClubModalContainer>
  )
}

export default DetailClub
