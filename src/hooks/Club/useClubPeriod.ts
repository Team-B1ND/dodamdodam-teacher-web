import { B1ndToast } from '@b1nd/b1nd-toastify'
import dayjs from 'dayjs'
import { useClubMutation, useClubPeriodMutation } from 'queries/Club/club.query'
import { useCallback, useState } from 'react'
import {
  ClubPeriodParam,
  ClubPeriodType,
} from 'repositories/Club/ClubRepository'

export const useClubPeriod = () => {
  const [createDate, setCreateDate] = useState<ClubPeriodParam>({
    type: 'CLUB_APPLICANT',
    start: dayjs().format('YYYY-MM-DD'),
    end: dayjs().format('YYYY-MM-DD'),
  })
  const today = dayjs().format('YYYY-MM-DD')

  const handleDateChange = useCallback((date: Date, scope: 'start' | 'end') => {
    setCreateDate((prev) => ({
      ...prev,
      [scope]: dayjs(date).format('YYYY-MM-DD'),
    }))
  }, [])

  const clubPeriodMutataion = useClubPeriodMutation()
  const submitClubPeriod = (type: ClubPeriodType) => {
    const params = {
      type: type,
      start: createDate.start,
      end: createDate.end,
    }

    clubPeriodMutataion.mutate(params, {
      onSuccess: () => {
        B1ndToast.showSuccess('기간 설정 성공')
      },
      onError: () => {
        B1ndToast.showError('기간 설정 실패')
      },
    })
  }

  return {
    createDate,
    handleDateChange,
    today,
    submitClubPeriod,
  }
}
