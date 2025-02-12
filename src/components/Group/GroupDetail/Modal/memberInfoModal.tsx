import { DodamFilledButton, DodamModal } from '@b1nd/dds-web';
import React from 'react';
import * as S from '../style';
import { GroupMember } from 'repositories/Group/group.repository';
import { groupPermissionTransform } from 'utils/Transform/gruopPermissionTransform';

interface MemberInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: GroupMember;
}

const MemberInfoModal = ({ isOpen, onClose, member }: MemberInfoModalProps) => {
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
        <DodamFilledButton text="내보내기" size="Medium" backgroundColorType={'Negative'} />
      </S.MemberInfoModalWrap>
    </DodamModal>
  );
};

export default MemberInfoModal;
