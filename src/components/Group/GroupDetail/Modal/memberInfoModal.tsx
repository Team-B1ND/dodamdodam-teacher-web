import { DodamFilledButton, DodamModal } from '@b1nd/dds-web';
import React from 'react';
import * as S from '../style';
import { GroupMember } from 'repositories/Group/group.repository';
import { groupPermissionTransform } from 'utils/Transform/gruopPermissionTransform';
import { usePatchGroupMemberStatusMutation } from 'queries/Group/group.query';
import { B1ndToast } from '@b1nd/b1nd-toastify';

interface MemberInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: GroupMember;
}

const MemberInfoModal = ({ isOpen, onClose, member }: MemberInfoModalProps) => {
  const patchGroupMemberStatusMutation = usePatchGroupMemberStatusMutation();
  const patchGroupMemberStatus = () => {
    patchGroupMemberStatusMutation.mutate(
      {
        status: 'REJECTED',
        id: member.id,
        memberId: [member.id],
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess('내보내기 성공');
          onClose();
        },
        onError: () => {
          B1ndToast.showError('내보내기 실패');
        },
      }
    );
  };
  return (
    <DodamModal isOpen={isOpen} close={onClose} customStyle={{ top: '-1%' }}>
      <S.MemberInfoModalWrap>
        <S.MemberInfoModalHeader>
          <h1>{member?.memberName}</h1>
          <span>
            {member?.grade}학년 {member?.room}반 {member?.number}번
          </span>
        </S.MemberInfoModalHeader>
        <S.MemberInfoModalHeader>
          <h1>권한 정보</h1>
          <span>{groupPermissionTransform(member?.permission)}</span>
        </S.MemberInfoModalHeader>
        <DodamFilledButton
          text="내보내기"
          size="Medium"
          backgroundColorType={'Negative'}
          onClick={patchGroupMemberStatus}
        />
      </S.MemberInfoModalWrap>
    </DodamModal>
  );
};

export default MemberInfoModal;
