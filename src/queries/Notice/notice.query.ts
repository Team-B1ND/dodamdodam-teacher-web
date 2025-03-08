import { QUERY_KEYS } from 'queries/queryKey'
import { useMutation, useInfiniteQuery, useQuery } from 'react-query'
import { NoticeWriteData } from 'repositories/Notice/noticeRepository'
import noticeRepositoryImpl from 'repositories/Notice/noticeRepositoryImpl'

export const useNoticeWriteMutation = () => {
  const mutation = useMutation((param: NoticeWriteData) =>
    noticeRepositoryImpl.writeNotice(param)
  )

  return mutation
}

export const useInfiniteNotices = (
  keyword: string,
  selectCategory?: number
) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.notice.notice, keyword, selectCategory],
    queryFn: async ({ pageParam = null }) => {
      // API 호출 시 keyword가 없거나 selectCategory가 없을 경우 null을 전달
      if (keyword) {
        return await noticeRepositoryImpl.getNotice(pageParam, keyword)
      }
      if (selectCategory) {
        return await noticeRepositoryImpl.getDivisionNotice(
          pageParam,
          selectCategory
        )
      }
      // 기본적으로 전체를 불러옴
      return await noticeRepositoryImpl.getDivisionNotice(pageParam)
    },
    getNextPageParam: (lastPage) => lastPage.nextLastId ?? undefined,
    suspense: true,
    staleTime: 1000 * 60 * 5, // 5분 동안 캐시된 데이터 사용
    cacheTime: 1000 * 60 * 10, // 10분 후 캐시 데이터 제거
    refetchOnWindowFocus: false, // 창 포커스 시 재요청 방지
  })
}

export const useFileUploadMutation = () => {
  const mutation = useMutation((params: FormDataEntryValue) =>
    noticeRepositoryImpl.upload(params)
  )

  return mutation
}

export const useDeleteNoticeMutation = () => {
  const mutation = useMutation((id: string) => noticeRepositoryImpl.delete(id))

  return mutation
}
