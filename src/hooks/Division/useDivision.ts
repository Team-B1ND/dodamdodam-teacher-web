import { B1ndToast } from '@b1nd/b1nd-toastify'
import {
  useCreateDivisionMutation,
  usePatchDivisionMemberStatusMutation,
} from 'queries/Division/division.query'
import { QUERY_KEYS } from 'queries/queryKey'
import { useCallback, useState, useRef } from 'react'
import { useQueryClient } from 'react-query'
import { useRecoilState } from 'recoil'
import {
  DivisionMemberStatus,
  DivisionWriteData,
} from 'repositories/Division/division.repository'

export const useDivision = () => {
  const [divisionId, setdivisionId] = useState<number | null>(null)
  const [divisionName, setdivisionName] = useState('')
  const [isAtv, setIsAtv] = useState(true)
  const [writeData, setWriteData] = useState<DivisionWriteData>({
    name: '',
    description: '',
  })
  const [keyword, setKeyword] = useState('')
  const [section, setSection] = useState('main')
  //검색
  const searchRef = useRef<HTMLInputElement>(null)
  const searchSubmit = () => {
    const searchValue = searchRef.current?.value || ''
    setKeyword(searchValue)
  }

  const handleWriteDataChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target
      setWriteData((prev) => ({ ...prev, [name]: value }))
    },
    [setWriteData]
  )

  const queryClient = useQueryClient()

  const createDivisionMutation = useCreateDivisionMutation()
  const handleCreateDivision = () => {
    createDivisionMutation.mutate(writeData, {
      onSuccess: () => {
        B1ndToast.showSuccess('그룹 생성 성공')
        setSection('main')
      },
      onError: () => {
        B1ndToast.showError('그룹 생성 실패')
      },
    })
  }

  const patchDivisionMemberStatusMutation =
    usePatchDivisionMemberStatusMutation()
  const patchDivisionMemberStatus = (
    status: DivisionMemberStatus,
    id: number,
    memberId: number[],
    isAdmin?: boolean
  ) => {
    if (isAdmin) {
      B1ndToast.showInfo('관리자는 내보낼 수 없습니다')
      return
    }

    patchDivisionMemberStatusMutation.mutate(
      {
        status: status,
        id: id,
        memberId: memberId,
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess('멤버 상태 변경 성공')
          queryClient.invalidateQueries(
            QUERY_KEYS.division.getDivisionMember(
              status === 'PENDING' ? 'PENDING' : 'ALLOWED',
              id
            )
          )
        },
        onError: () => {
          B1ndToast.showError('멤버 상태 변경 실패')
        },
      }
    )
  }

  return {
    keyword,
    searchRef,
    writeData,
    isAtv,
    divisionId,
    divisionName,
    section,
    setdivisionId,
    setdivisionName,
    setIsAtv,
    setSection,
    searchSubmit,
    handleWriteDataChange,
    handleCreateDivision,
    patchDivisionMemberStatus,
  }
}
