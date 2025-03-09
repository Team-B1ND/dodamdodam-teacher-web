import { useClubMutation } from 'queries/Club/club.query'

export const useClubActions = ({ close }: { close?: () => void }) => {
  const { mutate } = useClubMutation()

  const approveClub = (clubId: number) => {
    mutate({ clubIds: [clubId], status: 'ALLOWED' })

    close?.()
  }

  const rejectClub = (clubId: number, reason: string) => {
    mutate({ clubIds: [clubId], status: 'REJECTED', reason })
    close?.()
  }

  const bulkApproveClubs = (clubIds: number[]) => {
    mutate({ clubIds, status: 'ALLOWED' })
    close?.()
  }

  return { approveClub, rejectClub, bulkApproveClubs }
}
