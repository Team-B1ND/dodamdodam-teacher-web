import { Suspense } from 'react'
import ErrorBoundary from 'components/common/ErrorBoundary'
import SkeletonComponent from 'components/common/Skeleton'
import BusListItem from './BusListItem'
import * as S from './style'
import NoticeSearchBar from 'components/common/NoticeSearchbar'
import { DodamSegmentedButton, Plus } from '@b1nd/dds-web'
import { useRecoilState } from 'recoil'
import { BusListPageAtom } from 'stores/Bus/bus.store'

const BusList = () => {
  const [page, setPage] = useRecoilState(BusListPageAtom)
  return (
    <S.BusContainer>
      <NoticeSearchBar
        searchFn={() => {}}
        placeholder='검색할 버스의 종착역을 입력해주세요.'
      />
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
              <BusListItem page={page} />
            </Suspense>
          </ErrorBoundary>
        </S.BusList>
      </S.BusListWrap>
    </S.BusContainer>
  )
}

export default BusList
