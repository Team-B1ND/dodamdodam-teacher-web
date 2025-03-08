import { B1ndToast } from '@b1nd/b1nd-toastify'
import { DodamDialog } from '@b1nd/dds-web'
import { useApplicateTeacherMutation } from 'queries/Club/club.query'
import { QUERY_KEYS } from 'queries/queryKey'
import { useQueryClient } from 'react-query'

export const useApplicateTeacher = () => {
  const queryClient = useQueryClient()
  const applicateTeacherMutation = useApplicateTeacherMutation()
  const submitApplicateTeacher = async (
    clubId: number,
    teacherName: string,
    clubName: string
  ) => {
    const answer = await DodamDialog.confirm(
      '이 동아리의 담당 선생님이 되시겠습니까?'
    )

    if (answer) {
      applicateTeacherMutation.mutate(
        { clubId, teacherName },
        {
          onSuccess: () => {
            B1ndToast.showSuccess(
              `${clubName} 동아리의 담당 선생님이 되셨습니다.`
            )
            queryClient.invalidateQueries(QUERY_KEYS.club.getClubs)
          },
          onError: (error) => {
            B1ndToast.showError('동아리 선생님 지원에 실패했습니다.')
          },
        }
      )
    }
  }

  return {
    submitApplicateTeacher,
  }
}
