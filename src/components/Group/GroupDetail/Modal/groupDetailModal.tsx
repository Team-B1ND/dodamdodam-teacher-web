import { Portal } from 'components/common/Portal';
import React from 'react';
import * as S from '../style';
import { DodamDivider, DodamModal, DodamTag } from '@b1nd/dds-web';

interface GroupDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  pendingMembers: number;
}

const GroupDetailModal = ({ isOpen, onClose, pendingMembers }: GroupDetailModalProps) => {
  return (
    <DodamModal isOpen={isOpen} close={onClose} customStyle={{ top: '-24%', left: '13%' }}>
      <S.GroupDetailModalWrap>
        <S.ApplyMemberWrap>
          <p>가입 신청</p>
          <DodamTag text={pendingMembers?.toString()} color="blue" />
        </S.ApplyMemberWrap>
        <DodamDivider type="Small" />
        <S.ApplyMemberWrap>
          <p>멤버 추가</p>
        </S.ApplyMemberWrap>
      </S.GroupDetailModalWrap>
    </DodamModal>
  );
};

export default GroupDetailModal;
