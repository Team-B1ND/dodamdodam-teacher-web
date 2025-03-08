import { useState } from 'react'
import * as S from './style'
import { DodamDatePicker, DodamFilledButton } from '@b1nd/dds-web'
import { useClubPeriod } from 'hooks/Club/useClubPeriod'

type ClubPeriodType = 'create' | 'applicant'

interface ClubDateProps {
  clubPeriodType: ClubPeriodType
}

export const ClubDateItem: React.FC<ClubDateProps> = ({ clubPeriodType }) => {
  const title =
    clubPeriodType === 'create' ? '동아리 개설 기간' : '동아리 신청 기간'
  const { createDate, today, handleDateChange, submitClubPeriod } =
    useClubPeriod()

  return (
    <S.ClubDateWrapBox>
      <S.ClubTitle>{title}</S.ClubTitle>
      <S.ClubContainer>
        <S.WrapDatePicker>
          <span>시작일</span>
          <DodamDatePicker
            itemKey='club'
            onChange={(e) => handleDateChange(e, 'start')}
            value={createDate.start || today}
            title='시작일'
            customStyle={{ marginRight: '20px' }}
          />
        </S.WrapDatePicker>
        <S.WrapDatePicker>
          <span>마감일</span>
          <DodamDatePicker
            itemKey='club'
            onChange={(e) => handleDateChange(e, 'end')}
            value={createDate.end || today}
            title='마감일'
            customStyle={{ marginRight: '20px' }}
          />
        </S.WrapDatePicker>
      </S.ClubContainer>
      <DodamFilledButton
        size={'Small'}
        text={title + ' 설정'}
        textTheme={'staticWhite'}
        typography={['Body2', 'Medium']}
        customStyle={{ marginTop: '20px' }}
        onClick={() =>
          submitClubPeriod(
            clubPeriodType === 'create' ? 'CLUB_CREATED' : 'CLUB_APPLICANT'
          )
        }
      />
    </S.ClubDateWrapBox>
  )
}

export default ClubDateItem
