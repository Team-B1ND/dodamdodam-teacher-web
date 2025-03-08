import { useState } from 'react'
import ClubMemberItem from './ClubMemberItem'
import * as S from './style'
import {
  DodamFilledButton,
  ExclamationmarkCircle,
  Close,
  DodamModal,
  CheckmarkCircleFilled,
  DodamDivider,
} from '@b1nd/dds-web'
import JoinConfirm from './JoinConfirm'
import MDEditor from '@uiw/react-md-editor'
import {
  useGetClubDetailQuery,
  useGetClubMembersQuery,
  useGetTimeQuery,
} from 'queries/Club/club.query'
import SkeletonComponent from 'components/common/Skeleton'
import { ClubMember } from 'types/Club/club.type'

interface DetailClubProps {
  item: number
  close: () => void
  leader: ClubMember
}

const DetailClub = ({ item, close, leader }: DetailClubProps) => {
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false)
  const { data: club, isLoading: clubIsLoading } = useGetClubDetailQuery({
    id: item,
  })
  const { data: members, isLoading: memberIsLoading } = useGetClubMembersQuery({
    id: item,
  })
  const { data: timeData, isLoading: timeIsLoading } = useGetTimeQuery()
  const date = new Date()
  const today = date.toLocaleDateString().replace(/. /g, '-0').replace('.', '')

  if (clubIsLoading || !club || memberIsLoading) {
    return <div>스켈레톤 ui</div>
    // 후에 스켈레톤 ui 추가예정
  }

  return (
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
                  <CheckmarkCircleFilled color='#00C265' size={32} />
                ) : (
                  <ExclamationmarkCircle color={'#FBD300'} size={32} />
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
                    onClick={() => setIsRejectModalOpen(!isRejectModalOpen)}
                  />
                  <DodamFilledButton
                    size='Small'
                    width={97}
                    text='개설 거절'
                    textTheme={'staticWhite'}
                    typography={['Body2', 'Medium']}
                    customStyle={{
                      minHeight: '38px',
                      marginLeft: '11px',
                      backgroundColor: '#FF4242',
                    }}
                    onClick={() => setIsRejectModalOpen(!isRejectModalOpen)}
                  />
                  <DodamModal isOpen={isRejectModalOpen} background={true}>
                    <JoinConfirm />
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
              {members?.data?.students?.map((item) => {
                return (
                  <ClubMemberItem
                    name={item.name}
                    grade={item.grade}
                    room={item.room}
                  />
                )
              })}
            </div>
            <S.ExplainClubWrap>
              <div>설명</div>
              <S.ExplainClubBox>
                <S.MarkDownWrapBox>
                  <MDEditor.Markdown
                    source={club.data.description}
                    style={{ backgroundColor: '#fff', color: '#000' }}
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
