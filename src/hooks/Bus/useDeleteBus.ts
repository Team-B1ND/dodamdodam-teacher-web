import { B1ndToast } from '@b1nd/b1nd-toastify'
import { QUERY_KEYS } from 'queries/queryKey'
import { useQueryClient } from 'react-query'
import { useDeleteBusMutation } from 'queries/Bus/bus.query'
import { AxiosError } from 'axios'
import { DodamDialog } from '@b1nd/dds-web'
import { Dispatch, SetStateAction } from 'react'

export const useDeleteBus = ({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>
}) => {
  const deleteBus = useDeleteBusMutation()
  const queryClient = useQueryClient()

  const handleDeleteBusClick = async (busId: number) => {
    const answer = await DodamDialog.confirm('정말 삭제하시겠습니까?')

    if (answer) {
      deleteBus.mutate(busId, {
        onSuccess: () => {
          setSection('main')
          queryClient.invalidateQueries(QUERY_KEYS.bus.busDate)
          B1ndToast.showSuccess('버스를 삭제하였습니다.')
        },
        onError: (error) => {
          const errorResponse = (error as AxiosError).response
          B1ndToast.showError((errorResponse?.data as AxiosError).message)
        },
      })
    }
  }

  return {
    handleDeleteBusClick,
  }
}
