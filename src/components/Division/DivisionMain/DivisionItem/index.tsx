import InfiniteScroll from 'react-infinite-scroller'
import { ItemBox } from '../style'
import { ChevronRight } from '@b1nd/dds-web'
import { useDivision } from 'queries/Division/division.query'
import SkeletonComponent from 'components/common/Skeleton'
import { Dispatch, SetStateAction } from 'react'

const DivisionItem = ({
  keyword,
  isAtv,
  setSection,
  setDivisionId,
}: {
  keyword: string
  isAtv: boolean
  setSection: Dispatch<SetStateAction<string>>
  setDivisionId: Dispatch<SetStateAction<number | null>>
}) => {
  const { data, fetchNextPage, hasNextPage } = useDivision(isAtv, keyword)

  return (
    <InfiniteScroll
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<SkeletonComponent length={5} height={48} />}
    >
      {data?.pages.map((page) =>
        page.data.map((division: { id: number; name: string }) => (
          <ItemBox
            key={division.id}
            onClick={() => {
              setSection('divisionDetail')
              setDivisionId(division.id)
            }}
          >
            <p>{division.name}</p>
            <ChevronRight size={16} color='labelAssisitive' />
          </ItemBox>
        ))
      )}
    </InfiniteScroll>
  )
}

export default DivisionItem
