import * as S from './style'
import InfiniteScroll from 'react-infinite-scroller'
import { NoticeSidebarType } from 'types/Notice/notice.type'
import { DodamSegmentedButton } from '@b1nd/dds-web'
import { useNoticeSidebar } from 'hooks/Notice/useNoticeSidebar'
import SkeletonComponent from 'components/common/Skeleton'
import { Suspense } from 'react'

const NoticeSidebar = ({ title, isWrite }: NoticeSidebarType) => {
  const {
    pageData,
    categoryList,
    fetchNextPage,
    hasNextPage,
    handleClickPageButton,
    handleChangeCategory,
    isLoading,
  } = useNoticeSidebar()

  return (
    <S.NoticeSidebarWrap>
      <DodamSegmentedButton
        num={pageData.length}
        type='block'
        data={pageData}
        width={404}
        height={50}
        onClick={handleClickPageButton}
        textColor='staticWhite'
        customBackbgroundColor='primaryNormal'
        customBackbgroundWrapColor='staticWhite'
      />
      <S.CategoryWrap>
        <S.Title>
          {isWrite ? (
            <>
              공지를 보낼
              <br />
              그룹을 선택해주세요
            </>
          ) : (
            title
          )}
        </S.Title>

        {!isLoading && (
          <InfiniteScroll
            loadMore={() => fetchNextPage()}
            hasMore={hasNextPage}
          >
            <S.Category>
              {categoryList?.map((item) => (
                <S.CategoryTag
                  key={item.id}
                  isAtv={item.isAtv}
                  onClick={() => handleChangeCategory(isWrite, item.id)}
                >
                  {item.name}
                </S.CategoryTag>
              ))}
            </S.Category>
          </InfiniteScroll>
        )}
      </S.CategoryWrap>
    </S.NoticeSidebarWrap>
  )
}
export default NoticeSidebar
