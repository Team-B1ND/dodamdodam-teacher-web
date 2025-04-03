import React, { Dispatch, SetStateAction } from 'react'
import * as S from './style'
import { ChevronRight, DodamFilledButton } from '@b1nd/dds-web'
import {
  BusDateAndList,
  BusDateAndListResponse,
  BusListByPeriod,
  BusListByPeriodResponse,
  BusListMember,
} from 'types/Bus/bus.type'
import { CreateBusPeriodParam } from 'repositories/Bus/BusRepository'
import BusAdd from '../SelectBus/BusAdd'
import SkeletonComponent from 'components/common/Skeleton'
import BusPeriodListTemplate from './ListTemplate/BusPeriodListTemplate'
import BusListDataTemplate from './ListTemplate/BusListDataTemplate'

interface BusListTemplateProps {
  setSection: Dispatch<SetStateAction<string>>
  busListData?: BusDateAndListResponse
  busPeriodListData?: BusListByPeriodResponse
  handleBusIds?: (id: number) => void
  busIds?: number[]
  setIsAdd?: Dispatch<SetStateAction<boolean>>
  createBusPeriod?: (param: CreateBusPeriodParam) => void
  title: string
  endAt?: string
  startAt?: string
  isAdd?: boolean
  setBusId?: Dispatch<SetStateAction<number>>
  setBusMember?: Dispatch<SetStateAction<BusListMember[]>>
  setBusData?: Dispatch<SetStateAction<BusListByPeriod>>
  isLoading?: boolean
}

const BusListTemplate = ({
  setSection,
  busListData,
  busPeriodListData,
  handleBusIds,
  busIds,
  setIsAdd,
  createBusPeriod,
  title,
  endAt,
  startAt,
  isAdd,
  setBusId,
  setBusMember,
  setBusData,
  isLoading,
}: BusListTemplateProps) => {
  return (
    <>
      <S.SelectBusWrap>
        <S.SelectBusTitle>{title}</S.SelectBusTitle>
        <S.ListWrap>
          {isLoading ? (
            <SkeletonComponent length={5} height={48} />
          ) : title === '버스 등록' ? (
            <BusListDataTemplate
              setBusId={setBusId!}
              busListData={busListData!}
              handleBusIds={handleBusIds!}
            />
          ) : (
            <BusPeriodListTemplate
              busPeriodListData={busPeriodListData!}
              setBusData={setBusData!}
              setBusId={setBusId!}
              setBusMember={setBusMember!}
              setSection={setSection}
            />
          )}
        </S.ListWrap>
        {title === '버스 등록' ? (
          <S.ButtonWrap>
            <DodamFilledButton
              size='Large'
              text='뒤로가기'
              backgroundColorType='Assistive'
              textTheme='labelNormal'
              onClick={() => setSection('createPeriod')}
              width={120}
            />
            <DodamFilledButton
              size='Large'
              text='새 버스 추가'
              backgroundColorType='Primary'
              textTheme='staticWhite'
              typography={['Body1', 'Medium']}
              onClick={() => setIsAdd?.(true)}
              width={135}
            />
            <DodamFilledButton
              size='Large'
              text='버스 등록'
              backgroundColorType='Primary'
              textTheme='staticWhite'
              onClick={() => {
                const param: CreateBusPeriodParam = {
                  startAt: startAt!,
                  endAt: endAt!,
                  busId: busIds!,
                }
                createBusPeriod?.(param)
              }}
              width={120}
            />
          </S.ButtonWrap>
        ) : (
          <S.ButtonWrap>
            <DodamFilledButton
              size='Large'
              text='뒤로가기'
              backgroundColorType='Assistive'
              textTheme='labelNormal'
              onClick={() => setSection('main')}
              width={120}
            />
          </S.ButtonWrap>
        )}
      </S.SelectBusWrap>
      {title === '버스 등록' && (
        <BusAdd isOpen={isAdd!} close={() => setIsAdd?.(false)} />
      )}
    </>
  )
}

export default BusListTemplate
