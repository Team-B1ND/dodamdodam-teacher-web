import { QUERY_KEYS } from 'queries/queryKey';
import { useMutation,useInfiniteQuery } from 'react-query';
import { NoticeWriteData } from 'repositories/Notice/NoticeRepository';
import noticeRepositoryImpl from 'repositories/Notice/noticeRepositoryImpl';

export const useNoticeWriteMutation = () => {
  const mutation = useMutation((param: NoticeWriteData) => noticeRepositoryImpl.writeNotice(param));

  return mutation;
};

export const useInfiniteNotices = (keyword?: string ) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.notice.notice,keyword],
    queryFn: ({ pageParam = 0 }) => noticeRepositoryImpl.getNotice(pageParam, keyword),
    getNextPageParam: (lastPage) => lastPage.nextLastId ?? undefined, 
    suspense:true,
  });
};
