import { useGetAllBusListQuery } from 'queries/Bus/bus.query'
import * as S from './style'
import InfiniteScroll from 'react-infinite-scroller'
import SkeletonComponent from 'components/common/Skeleton'
import { ChevronRight } from '@b1nd/dds-web'

const BusListItem = ({ page }: { page: number }) => {
  const { data, fetchNextPage, hasNextPage } = useGetAllBusListQuery(true)

  return (
    <InfiniteScroll
      loadMore={() => {}}
      hasMore={false}
      loader={<SkeletonComponent length={5} height={48} />}
    >
      {data?.pages.map((page) =>
        page.data.map((bus) => <S.ItemBox key={bus.id}>
          <p>{bus.busName}</p>
        </S.ItemBox>)
      )}
    </InfiniteScroll>
  )
}

export default BusListItem
