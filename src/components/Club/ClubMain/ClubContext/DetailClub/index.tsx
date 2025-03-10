import { useState } from 'react'
import ClubMemberItem from './ClubMemberItem'
import * as S from './style'
import {
  DodamFilledButton,
  Close,
  DodamModal,
  CheckmarkCircleFilled,
  XmarkCircle,
  Clock,
} from '@b1nd/dds-web'
import JoinConfirm from './JoinConfirm'
import MDEditor from '@uiw/react-md-editor'
import ClubDetailSkeleton from './ClubDetailSkeleton'
import { ClubMember } from 'types/Club/club.type'
import { useTheme } from 'styled-components'
import { useClubDetail, useClubTime } from 'hooks/Club/useClubData'
import { useClubActions } from 'hooks/Club/useClubActions'

interface DetailClubProps {
  item: number
  close: () => void
  leader: ClubMember
}

const DetailClub = ({ item, close, leader }: DetailClubProps) => {
  const theme = useTheme()
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false)
  const { club, members, isLoading } = useClubDetail(item)
  const { timeData, isLoading: timeIsLoading } = useClubTime()
  const { approveClub } = useClubActions({ close })

  const date = new Date()
  const today = date.toLocaleDateString().replace(/. /g, '-0').replace('.', '')

  return isLoading || timeIsLoading ? (
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
              <S.ClubTypeName>
                {club.data.type === 'CREATIVE_ACTIVITY_CLUB'
                  ? '창체 • '
                  : '자율 • '}
                {club.data.subject}
              </S.ClubTypeName>
              <S.ClubNameWrap>
                <S.ClubName>{club.data.name}</S.ClubName>
                {timeData!.createEnd > today &&
                club.data.state === 'ALLOWED' ? (
                  <CheckmarkCircleFilled color={'statusPositive'} size={32} />
                ) : club.data.state === 'REJECTED' ? (
                  <XmarkCircle color={'statusNegative'} size={32} />
                ) : (
                  <Clock size={32} />
                )}
              </S.ClubNameWrap>
              <S.ClubShortDescription>
                {club.data.shortDescription}
              </S.ClubShortDescription>
            </div>
            <S.ClubApprovalContainer>
              {timeData!.createEnd > today && (
                <S.WrapButton>
                  <DodamFilledButton
                    size='Small'
                    width={97}
                    text='개설 승인'
                    textTheme={'staticWhite'}
                    typography={['Body2', 'Medium']}
                    customStyle={{ minHeight: '38px', marginLeft: '11px' }}
                    onClick={() => approveClub(item)}
                  />
                  <DodamFilledButton
                    size='Small'
                    width={97}
                    text='개설 거절'
                    textTheme={'staticWhite'}
                    typography={['Body2', 'Medium']}
                    customStyle={{ minHeight: '38px', marginLeft: '11px' }}
                    backgroundColorType={'Negative'}
                    onClick={() => setIsRejectModalOpen(!isRejectModalOpen)}
                  />
                  <DodamModal isOpen={isRejectModalOpen} background={true}>
                    <JoinConfirm
                      onClose={() => setIsRejectModalOpen(false)}
                      clubId={item}
                    />
                  </DodamModal>
                </S.WrapButton>
              )}
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
            <div>
              <S.Member>멤버</S.Member>
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
            <S.ExplainClubWrap>
              <div>설명</div>
              <S.ExplainClubBox>
                <S.MarkDownWrapBox>
                  <MDEditor.Markdown
                    source={club.data.description}
                    style={{
                      backgroundColor: theme.backgroundNomal,
                      color: theme.labelNomal,
                    }}
                  />
                </S.MarkDownWrapBox>
              </S.ExplainClubBox>
            </S.ExplainClubWrap>
          </S.ClubInfoDetail>
        </div>
      </S.ClubMiddleContainer>
    </S.ClubModalContainer>
  )
}

export default DetailClub
