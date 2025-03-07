import * as S from './style'
import InfiniteScroll from 'react-infinite-scroller'
import SkeletonComponent from 'components/common/Skeleton'
import { ChevronRight } from '@b1nd/dds-web'
import { Dispatch, SetStateAction } from 'react'
import { BusDateAndListResponse } from 'types/Bus/bus.type'
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from 'react-query'
import { useSetRecoilState } from 'recoil'
import { SelectBusDataAtom } from 'stores/Bus/bus.store'

interface BusListItemProps {
  page: number
  setSection: Dispatch<SetStateAction<string>>
  data: InfiniteData<BusDateAndListResponse>
  hasNextPage?: boolean
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<BusDateAndListResponse, unknown>>
}

const BusListItem = ({
  page,
  setSection,
  data,
  hasNextPage,
  fetchNextPage,
}: BusListItemProps) => {
  const setBusData = useSetRecoilState(SelectBusDataAtom)

  return (
    <InfiniteScroll
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<SkeletonComponent length={5} height={48} />}
    >
      {/* {data?.pages.map((page) =>
        page.data.map((bus) => (
          <S.ItemBox
            key={bus.id}
            onClick={() => {
              setBusData({ bus })
              setSection('info')
            }}
          >
            <p>{bus.busName}</p>
            <ChevronRight size={16} color='labelAssistive' />
          </S.ItemBox>
        ))
      )} */}
      <S.ItemBox
        onClick={() => {
          setSection('info')
        }}
      >
        <p>동대구역 1호차</p>
        <ChevronRight size={16} color='labelAssistive' />
      </S.ItemBox>
    </InfiniteScroll>
  )
}
export default BusListItem
