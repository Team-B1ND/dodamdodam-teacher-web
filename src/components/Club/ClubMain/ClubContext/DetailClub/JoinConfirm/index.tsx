import { useState, ChangeEvent } from 'react'
import * as S from './style'
import { DodamTextField, DodamFilledButton } from '@b1nd/dds-web'
import { useClubDetail } from 'hooks/Club/useClubData'
import { useClubActions } from 'hooks/Club/useClubActions'

interface JoinConfirmProps {
  onClose: () => void
  clubId: number
}

const JoinConfirm = ({ onClose, clubId }: JoinConfirmProps) => {
  const [rejectReason, setRejectReason] = useState<string>('')
  const { rejectClub } = useClubActions({})
  const { club, isLoading } = useClubDetail(clubId)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRejectReason(event.target.value)
  }

  const handleRejectButton = () => {
    if (!rejectReason.trim()) {
      alert('거절 사유를 입력해주세요.')
      return
    }
    rejectClub(clubId, rejectReason)
    onClose()
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <S.ClubJoinContainer>
      <S.InputBoxContainer>
        <S.RejectReason>거절 사유를 입력해주세요.</S.RejectReason>
        <DodamTextField
          id='rejectReason'
          name='rejectReason'
          type='text'
          value={rejectReason}
          label='부적절한 개설 목적'
          width={273}
          onChange={handleChange}
          customStyle={{ marginTop: '20px' }}
        />
      </S.InputBoxContainer>
      <S.RejectButtonContainer>
        <DodamFilledButton
          size={'Large'}
          enabled={true}
          text='취소'
          typography={['Body1', 'Medium']}
          backgroundColorType={'Assisitive'}
          onClick={onClose}
        />
        <DodamFilledButton
          size={'Large'}
          enabled={rejectReason.trim().length > 0}
          text='확인'
          textTheme={'staticWhite'}
          typography={['Body1', 'Medium']}
          style={{ marginLeft: '8px' }}
          onClick={handleRejectButton}
        />
      </S.RejectButtonContainer>
    </S.ClubJoinContainer>
  )
}

export default JoinConfirm
