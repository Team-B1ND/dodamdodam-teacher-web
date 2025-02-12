import { useInfiniteQuery } from "react-query";
import NoticeRepository from "repositories/Notice/noticeRepositoryImpl";

export const useInfiniteNotices = () => {
    return useInfiniteQuery({
      queryKey: ["notices"],
      queryFn: ({ pageParam = 0 }) => NoticeRepository.getNotice({ pageParam }), // ✅ 함수 호출 추가
      getNextPageParam: (lastPage) => lastPage.nextLastId ?? undefined, 
    });
};