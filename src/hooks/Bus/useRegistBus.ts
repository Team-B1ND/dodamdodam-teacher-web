import { B1ndToast } from '@b1nd/b1nd-toastify'
import { Axios, AxiosError } from 'axios'
import dayjs from 'dayjs'
import {
  useCreateBusMutation,
  useCreateBusPeriodMutation,
  useCreateBusPresetMutation,
} from 'queries/Bus/bus.query'
import { QUERY_KEYS } from 'queries/queryKey'
import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react'
import { useQueryClient } from 'react-query'
import {
  BusUpdateParam,
  CreateBusPeriodParam,
} from 'repositories/Bus/BusRepository'
import { BusBasicInfoType, BusCreateType, BusPreset } from 'types/Bus/bus.type'
import dateTransform from 'utils/Transform/dateTransform'

export const useRegistBus = ({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>
}) => {
  const [busData, setBusData] = useState<BusCreateType>({
    id: 0,
    busName: '',
    description: '',
    peopleLimit: 0,
    leaveTime: dayjs().format('HH:mm'),
    leaveAt: dateTransform.hyphen(),
    timeRequired: '00:00',
  })
  const [busPreset, setBusPreset] = useState<Omit<BusBasicInfoType, 'id'>>({
    busName: '',
    description: '',
    peopleLimit: 0,
    leaveTime: '',
    timeRequired: '',
  })

  const [registerBusData, setRegisterBusData] = useState<{
    startAt: string
    endAt: string
  }>({
    startAt: dateTransform.hyphen(),
    endAt: dateTransform.hyphen(),
  })

  const handleLeaveDataDate = useCallback((e: Date) => {
    setBusData((prev) => ({
      ...prev,
      leaveAt: dayjs(e).format('YYYY-MM-DD'),
    }))
  }, [])

  const handleRegisterBusData = useCallback(
    (e: Date, type: 'startAt' | 'endAt') => {
      setRegisterBusData((prev) => ({
        ...prev,
        [type]: dayjs(e).format('YYYY-MM-DD'),
      }))
    },
    [setRegisterBusData]
  )

  const handleBusPresetData = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setBusPreset((prev) => ({ ...prev, [name]: value }))
    },
    [setBusPreset]
  )

  const handleBusData = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setBusData((prev) => ({ ...prev, [name]: value }))
    },
    [setBusData]
  )

  const createBusPeriodMutation = useCreateBusPeriodMutation()
  const createBusPeriod = (param: CreateBusPeriodParam) => {
    createBusPeriodMutation.mutate(param, {
      onSuccess: () => {
        B1ndToast.showSuccess('버스 기간 생성 성공')
        setSection('main')
      },
      onError: () => {
        if (param.busId.length === 0) {
          B1ndToast.showInfo('버스를 선택해주세요')
          return
        }

        B1ndToast.showError('버스 기간 생성 실패')
      },
    })
  }

  const queryClient = useQueryClient()
  const registerBusMutatation = useCreateBusMutation()
  const submitRegistBus = (param: BusUpdateParam) => {
    registerBusMutatation.mutate(param, {
      onSuccess: () => {
        B1ndToast.showSuccess('버스 생성 성공')
        queryClient.invalidateQueries(QUERY_KEYS.bus.registeredBus)
      },
      onError: (error) => {
        B1ndToast.showError((error as AxiosError as AxiosError).message)
      },
    })
  }

  const createBusPresetMutation = useCreateBusPresetMutation()
  const createBusPreset = () => {
    createBusPresetMutation.mutate(
      {
        ...busPreset,
        leaveTime: dateTransform.time(busPreset.leaveTime, 'leaveTime'),
        timeRequired: dateTransform.time(
          busPreset.timeRequired,
          'timeRequired'
        ),
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess('버스프리셋 등록 성공')
          queryClient.invalidateQueries(QUERY_KEYS.bus.busPreset)
          queryClient.invalidateQueries(QUERY_KEYS.bus.registeredBus)
          setSection('main')
        },
        onError: (error) => {
          B1ndToast.showError((error as AxiosError as AxiosError).message)
        },
      }
    )
  }

  return {
    busData,
    registerBusData,
    busPreset,
    handleRegisterBusData,
    handleBusPresetData,
    handleBusData,
    handleLeaveDataDate,
    submitRegistBus,
    createBusPreset,
    createBusPeriod,
  }
}
