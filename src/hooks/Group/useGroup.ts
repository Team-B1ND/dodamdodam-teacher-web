import { B1ndToast } from '@b1nd/b1nd-toastify';
import { useCreateGroupMutation, usePatchGroupMemberStatusMutation } from 'queries/Group/group.query';
import { QUERY_KEYS } from 'queries/queryKey';
import { useCallback, useState, useRef } from 'react';
import { useQueryClient } from 'react-query';
import { GroupMemberStatus, GroupWriteData } from 'repositories/Group/group.repository';

export const useGroup = () => {
  const [section, setSection] = useState('main');
  const [groupId, setGroupId] = useState<number | null>(null);
  const [groupName, setGroupName] = useState('');
  const [isAtv, setAtv] = useState(true);
  const [writeData, setWriteData] = useState<GroupWriteData>({
    name: '',
    description: '',
  });

  //검색
  const searchRef = useRef<HTMLInputElement>(null);
  const searchSubmit = () => {
    console.log('검색어 post');
  };

  const handleWriteDataChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setWriteData((prev) => ({ ...prev, [name]: value }));
    },
    [setWriteData]
  );

  const queryClient = useQueryClient();

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

  const patchGroupMemberStatusMutation = usePatchGroupMemberStatusMutation();
  const patchGroupMemberStatus = (status: GroupMemberStatus, id: number, memberId: number[]) => {
    patchGroupMemberStatusMutation.mutate(
      {
        status: status,
        id: id,
        memberId: memberId,
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess('내보내기 성공');
          queryClient.invalidateQueries(QUERY_KEYS.group.getGroupMember(status, id));
        },
        onError: () => {
          B1ndToast.showError('내보내기 실패');
        },
      }
    );
  };

  return {
    searchRef,
    writeData,
    section,
    isAtv,
    groupId,
    groupName,
    setGroupId,
    setGroupName,
    setAtv,
    searchSubmit,
    setSection,
    handleWriteDataChange,
    handleCreateGroup,
    patchGroupMemberStatus,
  };
};
