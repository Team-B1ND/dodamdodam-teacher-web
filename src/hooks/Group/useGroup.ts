import { B1ndToast } from '@b1nd/b1nd-toastify';
import { useCreateGroupMutation } from 'queries/Group/group.query';
import { useCallback, useState } from 'react';
import { GroupWriteData } from 'repositories/Group/group.repository';

export const useGroup = () => {
  const [writeData, setWriteData] = useState<GroupWriteData>({
    name: '',
    description: '',
  });

  const handleWriteDataChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setWriteData((prev) => ({ ...prev, [name]: value }));
    },
    [setWriteData]
  );

  const createGroupMutation = useCreateGroupMutation();
  const handleCreateGroup = () => {
    createGroupMutation.mutate(writeData, {
      onSuccess: () => {
        B1ndToast.showSuccess('그룹 생성 성공');
      },
      onError: () => {
        B1ndToast.showError('그룹 생성 실패');
      },
    });
  };

  return {
    writeData,
    handleWriteDataChange,
    handleCreateGroup,
  };
};
