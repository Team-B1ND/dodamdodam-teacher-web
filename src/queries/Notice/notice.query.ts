import { useMutation } from "react-query";
import noticeRepositoryImpl from "repositories/Notice/notice.repositoryImpl";

export const useCreateNoticeMutation = () => {
  const mutation = useMutation(noticeRepositoryImpl.createNotice);
  return mutation;
};
