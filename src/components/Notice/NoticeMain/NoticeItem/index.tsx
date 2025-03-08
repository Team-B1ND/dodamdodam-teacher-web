import { useInfiniteNotices } from 'queries/Notice/notice.query'
import * as S from './style'
import { Notice } from 'types/Notice/notice.type'
import SkeletonComponent from 'components/common/Skeleton'
import InfiniteScroll from 'react-infinite-scroller'
import convertDateTime from 'utils/Time/ConvertDateTime'
import dayjs from 'dayjs'
import Linkify from 'react-linkify'
import { DodamNoticeFile } from '@b1nd/dds-web'

interface NoticeItemProps {
  keyword: string
  selectCategory?: number
  openDetail: (notice: Notice) => void
}

const NoticeItem = ({
  keyword,
  selectCategory,
  openDetail,
}: NoticeItemProps) => {
  const {
    data: Notice,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteNotices(keyword, selectCategory)

  // 공지가 없을 경우
  if (
    !Notice ||
    Notice.pages.length === 0 ||
    Notice.pages.every((page) => page.data.length === 0) ||
    Notice.pages.every((page) =>
      page.data.every((notice) => notice.noticeStatus === 'DELETED')
    )
  ) {
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        공지사항이 없습니다
      </div>
    )
  }

  return (
    <>
      <InfiniteScroll
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
        loadMore={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<SkeletonComponent length={5} height={48} />}
      >
        {Notice?.pages.map((page, pageIndex) =>
          page.data?.map((notice: Notice, index: number) => {
            const images = notice.noticeFileRes
              ? notice.noticeFileRes.filter((file) => file.fileType === 'IMAGE')
              : []
            const files = notice.noticeFileRes
              ? notice.noticeFileRes.filter((file) => file.fileType === 'FILE')
              : []
            if (notice.noticeStatus === 'DELETED') return null

            return (
              <S.NoticeItem
                key={`${pageIndex}-${index}`}
                onClick={() => openDetail(notice)}
              >
                <S.NoticeHeader>
                  <span>{notice?.memberInfoRes?.name ?? '알 수 없음'}</span> ·{' '}
                  <span>
                    {convertDateTime.getDayOfWeek(
                      dayjs(notice?.createdAt).toDate()
                    ) ?? '날짜 없음'}
                  </span>
                </S.NoticeHeader>
                <S.NoticeTitle>{notice?.title ?? '제목 없음'}</S.NoticeTitle>
                <S.NoticeContent>
                  <Linkify
                    componentDecorator={(
                      decoratedHref: string,
                      decoratedText: string,
                      key: number
                    ) => (
                      <a
                        href={decoratedHref}
                        key={key}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {decoratedText}
                      </a>
                    )}
                  >
                    {notice?.content ?? '내용 없음'}
                  </Linkify>
                </S.NoticeContent>

                {files.length > 0 && (
                  <S.NoticeFiles>
                    {files.map((file, idx) => (
                      <DodamNoticeFile
                        key={idx}
                        filename={file.fileName}
                        onClick={() => console.log()}
                        customStyle={{
                          border: '1px solid #0083F0 ',
                          gap: '5px',
                        }}
                      />
                    ))}
                  </S.NoticeFiles>
                )}

                {images.length > 0 && (
                  <S.NoticeImg imageCount={images.length}>
                    {images.slice(0, 2).map((image, idx) => (
                      <S.ImageWrapper key={idx}>
                        <img src={image.fileUrl} alt={`notice-img-${idx}`} />
                        {idx === 1 && images.length > 2 && (
                          <S.ImageOverlay>+{images.length - 2}</S.ImageOverlay>
                        )}
                      </S.ImageWrapper>
                    ))}
                  </S.NoticeImg>
                )}
              </S.NoticeItem>
            )
          })
        )}
      </InfiniteScroll>
    </>
  )
}

export default NoticeItem
