import { Dispatch, SetStateAction, Suspense } from 'react'
import ErrorBoundary from 'components/common/ErrorBoundary'
import SkeletonComponent from 'components/common/Skeleton'
import BusListItem from './BusListItem'
import * as S from './style'
import { DodamSegmentedButton, Plus } from '@b1nd/dds-web'
import { useRecoilState } from 'recoil'
import { BusListPageAtom } from 'stores/Bus/bus.store'
import { BusDateAndListResponse } from 'types/Bus/bus.type'
import { InfiniteData } from 'react-query'
import { useGetAllBusListQuery } from 'queries/Bus/bus.query'

interface BusListProps {
  setSection: Dispatch<SetStateAction<string>>
}

const BusList = ({ setSection }: BusListProps) => {
  const [page, setPage] = useRecoilState(BusListPageAtom)
  const { data, hasNextPage, fetchNextPage } = useGetAllBusListQuery(true)
  return (
    <S.BusContainer>
      <S.BusListWrap>
        <S.BusListHeader>
          <p>버스</p>
          <S.BusPlusIcon>
            <Plus size={20} color='labelAlternative' />
          </S.BusPlusIcon>
        </S.BusListHeader>
        <DodamSegmentedButton
          width={200}
          num={2}
          type='block'
          onClick={() => {}}
          data={[
            { text: '운행', isAtv: true },
            { text: '미운행', isAtv: false },
          ]}
        />
        <S.BusList>
          <ErrorBoundary text='데이터를 불러오지 못했습니다.' showButton={true}>
            <Suspense
              fallback={
                <SkeletonComponent
                  height={48}
                  customStyle={{ borderRadius: '8px' }}
                />
              }
            >
              <BusListItem
                page={page}
                setSection={setSection}
                data={data!}
                hasNextPage={hasNextPage}
                fetchNextPage={fetchNextPage}
              />
            </Suspense>
          </ErrorBoundary>
        </S.BusList>
      </S.BusListWrap>
    </S.BusContainer>
  )
}

export default BusList
