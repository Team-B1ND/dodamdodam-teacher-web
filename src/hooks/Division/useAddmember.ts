import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import {
  useCreateAddMemberMutation,
  useGetAllowedDivisionMemberQuery,
} from 'queries/Division/division.query'
import { DivisionMemberType } from 'repositories/Division/division.repository'
import { B1ndToast } from '@b1nd/b1nd-toastify'
import { useQueryClient } from 'react-query'
import { QUERY_KEYS } from 'queries/queryKey'

export const useAddMember = (id: number) => {
  const [divisionId, setDivisionId] = useState<number>(0)
  const { data } = useGetAllowedDivisionMemberQuery(divisionId)
  const { data: CurrentDivisionMember } = useGetAllowedDivisionMemberQuery(id)
  const [divisionMemberList, setdivisionMemberList] = useState<
    DivisionMemberType[]
  >([])
  const [memberIdList, setMemberIdList] = useState<string[]>([])
  const searchRef = useRef<HTMLInputElement>(null)
  const searchSubmit = () => {
    console.log('검색어 post')
  }

  console.log(memberIdList)

  const queryClient = useQueryClient()
  const createAddMemberMutation = useCreateAddMemberMutation()
  const handleAddMember = (setSection: Dispatch<SetStateAction<string>>) => {
    createAddMemberMutation.mutate(
      { id, memberIdList },
      {
        onSuccess: () => {
          B1ndToast.showSuccess('멤버 추가 성공')
          queryClient.invalidateQueries(
            QUERY_KEYS.division.getDivisionMember('ALLOWED', id)
          )
          setSection('groupDetail')
        },
        onError: () => {
          B1ndToast.showError('멤버 추가 실패')
        },
      }
    )
  }

  const handleClickDivision = (id: number) => {
    setDivisionId(id)
  }

  const handleClickAllMember = () => {
    if (divisionMemberList.every((division) => division.isAtv)) {
      setMemberIdList((prevId) =>
        prevId.filter(
          (id) => !divisionMemberList.some((division) => id === division.memberId)
        )
      )
    } else {
      setMemberIdList((prevId) => {
        const remainMemberList = divisionMemberList
          .filter((division) => !memberIdList.some((id) => id === division.memberId))
          .map((division) => division.memberId)

        return [...prevId, ...remainMemberList]
      })
    }
  }

  const handleClickMember = (memberId: string) => {
    setdivisionMemberList((prev) => {
      const updateList = prev.map((item) => ({
        ...item,
        isAtv: item.memberId === memberId ? !item.isAtv : item.isAtv,
      }))

      setMemberIdList((prevId) => {
        // isAtv가 true인 멤버만 가져옴
        const activeMembers = updateList
          .filter((item) => item.isAtv)
          .map((item) => item.memberId)

        // 현재 선택한 memberId가 activeMembers에 없으면 제거
        if (!activeMembers.includes(memberId)) {
          return prevId.filter((id) => id !== memberId)
        }

        // 새로운 멤버 추가 (중복 제거)
        return Array.from(new Set([...prevId, ...activeMembers]))
      })

      return updateList
    })
  }

  useEffect(() => {
    if (!data || !memberIdList) return

    setdivisionMemberList(() => {
      const DivisionData = data.data.filter(
        (division) =>
          !CurrentDivisionMember?.data.some(
            (currentDivision) => division.memberId === currentDivision.memberId
          )
      )

      return DivisionData.map((item) => ({
        ...item,
        isAtv: memberIdList.includes(item.memberId),
      }))
    })
  }, [data, memberIdList])

  return {
    divisionMemberList,
    searchRef,
    setMemberIdList,
    searchSubmit,
    handleAddMember,
    handleClickDivision,
    handleClickAllMember,
    handleClickMember,
  }
}
