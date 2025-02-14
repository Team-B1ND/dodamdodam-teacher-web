import { QUERY_KEYS } from 'queries/queryKey';
import { useMutation,useInfiniteQuery } from 'react-query';
import { NoticeWriteData } from 'repositories/Notice/noticeRepository';
import noticeRepositoryImpl from 'repositories/Notice/noticeRepositoryImpl';


export const useNoticeWriteMutation = () => {
  const mutation = useMutation((param: NoticeWriteData) => noticeRepositoryImpl.writeNotice(param));

  return mutation;
};

export const useInfiniteNotices = (keyword: string, selectCategory?: number) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.notice.notice, keyword, selectCategory],
    queryFn: ({ pageParam = 0 }) => {
      if (keyword) {
        return noticeRepositoryImpl.getNotice(pageParam, keyword);
      }
      if (selectCategory) {
        return noticeRepositoryImpl.getDivisionNotice(pageParam, selectCategory);
      }
      // 기본적으로 전체를 불러옴
      return noticeRepositoryImpl.getNotice(pageParam, "",);
    },
    getNextPageParam: (lastPage) => lastPage.nextLastId ?? undefined,
    suspense: true,
  });
};

