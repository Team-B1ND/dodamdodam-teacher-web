import { DodamFilledButton, DodamModal } from '@b1nd/dds-web'
import React from 'react'
import * as S from '../style'
import { DivisionMember } from 'repositories/Division/division.repository'
import { divisionPermissionTransform } from 'utils/Transform/divisionPermissionTransform'

interface MemberInfoModalProps {
  isOpen: boolean
  onClose: () => void
  member: DivisionMember
  patchDivisionMemberStatus: () => void
}

const MemberInfoModal = ({
  isOpen,
  onClose,
  member,
  patchDivisionMemberStatus,
}: MemberInfoModalProps) => {
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
          <span>{divisionPermissionTransform(member?.permission)}</span>
        </S.MemberInfoModalHeader>
        <DodamFilledButton
          text='내보내기'
          size='Medium'
          backgroundColorType={'Negative'}
          onClick={patchDivisionMemberStatus}
        />
      </S.MemberInfoModalWrap>
    </DodamModal>
  )
}

export default MemberInfoModal
