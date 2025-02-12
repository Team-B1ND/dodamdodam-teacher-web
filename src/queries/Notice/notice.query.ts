import { useMutation } from 'react-query';
import { NoticeWriteData } from 'repositories/Notice/NoticeRepository';
import noticeRepositoryImpl from 'repositories/Notice/NoticeRepositoryImpl';

export const useNoticeWriteMutation = () => {
  const mutation = useMutation((param: NoticeWriteData) => noticeRepositoryImpl.writeNotice(param));

  return mutation;
};
