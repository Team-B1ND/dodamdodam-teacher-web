import { useMutation } from 'react-query';
import { GroupWriteData } from 'repositories/Group/group.repository';
import groupRepositroy from 'repositories/Group/group.repositoryImpl';

export const useGetGroup = () => {};

export const useCreateGroupMutation = () => {
  const mutation = useMutation((param: GroupWriteData) => groupRepositroy.createGroup(param));

  return mutation;
};
