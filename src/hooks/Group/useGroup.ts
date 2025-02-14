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
  const [isAtv, setIsAtv] = useState(true);
  const [writeData, setWriteData] = useState<GroupWriteData>({
    name: '',
    description: '',
  });
  const [keyword, setKeyword] = useState('');

  //검색
  const searchRef = useRef<HTMLInputElement>(null);
  const searchSubmit = () => {
    const searchValue = searchRef.current?.value || '';
    setKeyword(searchValue);
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
        window.location.reload();
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
          B1ndToast.showSuccess('멤버 상태 변경 성공');
          queryClient.invalidateQueries(
            QUERY_KEYS.group.getGroupMember(status === 'PENDING' ? 'PENDING' : 'ALLOWED', id)
          );
        },
        onError: () => {
          B1ndToast.showError('멤버 상태 변경 실패');
        },
      }
    );
  };

  return {
    keyword,
    searchRef,
    writeData,
    section,
    isAtv,
    groupId,
    groupName,
    setGroupId,
    setGroupName,
    setIsAtv,
    searchSubmit,
    setSection,
    handleWriteDataChange,
    handleCreateGroup,
    patchGroupMemberStatus,
  };
};
