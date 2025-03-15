import React, { Dispatch, SetStateAction, Suspense } from 'react'
import * as S from './style'
import { ChevronRight, DodamErrorBoundary, Plus } from '@b1nd/dds-web'
import { useGetBusPeriodQuery } from 'queries/Bus/bus.query'
import dateTransform from 'utils/Transform/dateTransform'
import BusPeriodList from './PeriodList'
import SkeletonComponent from 'components/common/Skeleton'
import { BusPeriodResponse } from 'types/Bus/bus.type'
import { start } from 'repl'

interface BusMainProps {
  setSection: Dispatch<SetStateAction<string>>
  data: BusPeriodResponse
}

const BusMain = ({ setSection, data }: BusMainProps) => {
  return (
    <S.BusMainWrap>
      <S.TitleWrap>
        <h1>버스 등록</h1>
        <S.IconWrap onClick={() => setSection('createPeriod')}>
          <Plus color='labelAlternative' size={20} />
        </S.IconWrap>
      </S.TitleWrap>
      <S.PageDescription>귀가 버스 관리</S.PageDescription>
      <DodamErrorBoundary
        text='데이터를 불러오는 중 오류가 발생했습니다'
        showButton={true}
      >
        <Suspense fallback={<SkeletonComponent height={48} length={5} />}>
          <BusPeriodList data={data!} setSection={setSection} />
        </Suspense>
      </DodamErrorBoundary>
    </S.BusMainWrap>
  )
}

export default BusMain
