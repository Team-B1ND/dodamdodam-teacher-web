import React, { Dispatch, SetStateAction } from 'react';
import * as S from '../style';
import { DodamDivider, DodamModal, DodamTag } from '@b1nd/dds-web';

interface DivisionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  pendingMembers: number;
  setSection: Dispatch<SetStateAction<string>>;
}

const DivisionDetailModal = ({ isOpen, onClose, pendingMembers, setSection }: DivisionDetailModalProps) => {
  return (
    <DodamModal isOpen={isOpen} close={onClose} customStyle={{ top: '-24%', left: '13%' }}>
      <S.DivisionDetailModalWrap>
        <S.ApplyMemberWrap onClick={() => setSection('waitingMember')}>
          <p>가입 신청</p>
          {pendingMembers ? (
            <DodamTag text={pendingMembers?.toString()} color="blue" />
          ): ""}
          
        </S.ApplyMemberWrap>
        <DodamDivider type="Small" />
        <S.ApplyMemberWrap onClick={()=>{setSection('addMember')}}>
          <p>멤버 추가</p>
        </S.ApplyMemberWrap>
      </S.DivisionDetailModalWrap>
    </DodamModal>
  );
};

export default DivisionDetailModal;
