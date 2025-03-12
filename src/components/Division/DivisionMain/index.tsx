import React, { Dispatch, SetStateAction, Suspense } from 'react'
import * as S from './style'
import NoticeSearchBar from 'components/common/NoticeSearchbar'
import { Plus, DodamSegmentedButton } from '@b1nd/dds-web'
import ErrorBoundary from 'components/common/ErrorBoundary'
import SkeletonComponent from 'components/common/Skeleton'
import DivisionItem from './DivisionItem'

interface Props {
  keyword: string
  searchRef: React.RefObject<HTMLInputElement>
  searchSubmit: () => void
  isAtv: boolean
  setIsAtv: React.Dispatch<React.SetStateAction<boolean>>
  setSection: Dispatch<SetStateAction<string>>
  setdivisionId: Dispatch<SetStateAction<number | null>>
}

const DivisionMain = ({
  keyword,
  searchRef,
  searchSubmit,
  isAtv,
  setIsAtv,
  setSection,
  setdivisionId,
}: Props) => {
  return (
    <S.DivisionBox>
      <NoticeSearchBar
        searchFn={searchSubmit}
        ref={searchRef}
        placeholder='검색할 그룹을 입력하세요'
      />
      <S.DivisionPicker>
        <S.DivisionTitle>
          <p>그룹</p>
          <S.DivisionIcon onClick={() => setSection('createDivision')}>
            <Plus size={20} color='labelAlternative' />
          </S.DivisionIcon>
        </S.DivisionTitle>
        <DodamSegmentedButton
          width={200}
          num={2}
          type='block'
          onClick={() => setIsAtv((prev) => !prev)}
          data={[
            { text: '내 그룹', isAtv: isAtv },
            { text: '전체', isAtv: !isAtv },
          ]}
        />
        <S.DivisionDataBox>
          <ErrorBoundary text='데이터를 불러오지 못했습니다.' showButton={true}>
            <Suspense
              fallback={
                <SkeletonComponent
                  height={48}
                  customStyle={{ borderRadius: '8px' }}
                />
              }
            >
              <DivisionItem
                keyword={keyword}
                isAtv={isAtv}
                setSection={setSection}
                setDivisionId={setdivisionId}
              />
            </Suspense>
          </ErrorBoundary>
        </S.DivisionDataBox>
      </S.DivisionPicker>
    </S.DivisionBox>
  )
}

export default DivisionMain
