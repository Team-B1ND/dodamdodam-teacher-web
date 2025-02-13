import { useMutation,useInfiniteQuery } from 'react-query';
import { NoticeWriteData } from 'repositories/Notice/NoticeRepository';
import noticeRepositoryImpl from 'repositories/Notice/NoticeRepositoryImpl';

export const useNoticeWriteMutation = () => {
  const mutation = useMutation((param: NoticeWriteData) => noticeRepositoryImpl.writeNotice(param));

  return mutation;
};

export const useInfiniteNotices = () => {
  return useInfiniteQuery({
    queryKey: ["notices"],
    queryFn: ({ pageParam = 0 }) => noticeRepositoryImpl.getNotice(pageParam ),
    getNextPageParam: (lastPage) => lastPage.nextLastId ?? undefined, 
  });
};
