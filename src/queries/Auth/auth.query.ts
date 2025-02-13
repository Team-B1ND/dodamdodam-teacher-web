import { useMutation } from 'react-query';
import authRepositoryImpl from 'repositories/Auth/AuthRepositoryImpl';

export const useFindPasswordMutation = () => {
  const mutation = useMutation((password: string) => authRepositoryImpl.findPassword(password));

  return mutation;
};
