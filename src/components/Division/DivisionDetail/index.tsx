import React, { Dispatch, SetStateAction, useState } from 'react'
import * as S from './style'
import { ArrowLeft, DodamDivider, Menu, Person } from '@b1nd/dds-web'
import {
  useGetDivisionDetailQuery,
  useGetAllowedDivisionMemberQuery,
  useGetPendingDivisionMemberQuery,
} from 'queries/Division/division.query'
import { DivisionMember } from 'repositories/Division/division.repository'
import DivisionDetailModal from './Modal/divisionDetailModal'
import MemberInfoModal from './Modal/memberInfoModal'
import { useDivision } from 'hooks/Division/useDivision'
import { useSetRecoilState } from 'recoil'
import { DivisionNameAtom } from 'stores/Division/division.store'

const DivisionDetail = ({
  id,
  setSection,
}: {
  id: number
  setSection: Dispatch<SetStateAction<string>>
}) => {
  const { data } = useGetDivisionDetailQuery(id)
  const { data: memberData } = useGetAllowedDivisionMemberQuery(id)
  const { data: pendingData } = useGetPendingDivisionMemberQuery(id)

  const adminMembers =
    memberData?.data.filter((member) => member.permission === 'ADMIN') || []
  const writerMembers =
    memberData?.data.filter((member) => member.permission === 'WRITER') || []
  const readerMembers =
    memberData?.data.filter((member) => member.permission === 'READER') || []

  const [selectedMember, setSelectedMember] = useState<DivisionMember | null>(
    null
  )

  const renderMemberCell = (member: DivisionMember) => (
    <S.MemberCell
      key={member.id}
      onClick={() => {
        setSelectedMember(member)
        setMemberInfoModal((prev) => !prev)
      }}
    >
      <S.MemberInfo>
        {member.profileImage ? (
          <img src={member.profileImage} />
        ) : (
          <Person size={24} />
        )}
        <S.MemberName>{member.memberName}</S.MemberName>
      </S.MemberInfo>
      <S.MemberRole>
        {member.role === 'STUDENT' && '학생'}
        {member.role === 'TEACHER' && '선생님'}
        {member.role === 'ADMIN' && '관리자'}
      </S.MemberRole>
    </S.MemberCell>
  )

  const [detailModal, setDetailModal] = useState(false)
  const [memberInfoModal, setMemberInfoModal] = useState(false)
  const { patchDivisionMemberStatus } = useDivision()
  const setDivisionName = useSetRecoilState(DivisionNameAtom)
  return (
    <S.DivisionDetailWrap>
      <S.DivisionWrap>
        <S.BackIconWrap onClick={() => setSection('main')}>
          <ArrowLeft size={24} />
        </S.BackIconWrap>
        <S.DivisionDetailHeader>
          <S.DivisionDetailTitle>
            <h1>{data?.data.divisionName}</h1>
            <div
              style={{
                width: 'fit-content',
                height: 'fit-content',
                cursor: 'pointer',
              }}
              onClick={() => {
                setDetailModal(true)
                setDivisionName(data?.data.divisionName!)
              }}
            >
              <Menu color='labelAssistive' />
            </div>
          </S.DivisionDetailTitle>
          <S.DivisionDetailDescription>
            {data?.data.description}
          </S.DivisionDetailDescription>
        </S.DivisionDetailHeader>
        <DodamDivider type='Small' />
        <S.DivisionDetailMemberWrap>
          <S.DivisionDetailTitle>
            <h1>멤버</h1>
          </S.DivisionDetailTitle>
          <S.MemberWrap>
            <S.LeftSection>
              <S.AdminMembersWrap>
                <S.MemberWrapTitle>관리자</S.MemberWrapTitle>
                <S.MemberList>
                  {adminMembers.map(renderMemberCell)}
                </S.MemberList>
                <DodamDivider type='Small' />
                <S.MemberWrapTitle>부관리자</S.MemberWrapTitle>
                <S.MemberList>
                  {writerMembers.map(renderMemberCell)}
                </S.MemberList>
              </S.AdminMembersWrap>
            </S.LeftSection>
            <S.RightSection>
              <S.MemberWrapTitle>멤버</S.MemberWrapTitle>
              <S.MembersWrap>
                {readerMembers.map(renderMemberCell)}
              </S.MembersWrap>
            </S.RightSection>
          </S.MemberWrap>
        </S.DivisionDetailMemberWrap>
      </S.DivisionWrap>
      <DivisionDetailModal
        isOpen={detailModal}
        onClose={() => setDetailModal(false)}
        pendingMembers={pendingData?.data.length!}
        setSection={setSection}
      />
      <MemberInfoModal
        isOpen={memberInfoModal}
        onClose={() => {
          setMemberInfoModal(false)
          setSelectedMember(null)
        }}
        member={selectedMember!}
        patchDivisionMemberStatus={() =>
          patchDivisionMemberStatus('REJECTED', +id!, [selectedMember!.id])
        }
      />
    </S.DivisionDetailWrap>
  )
}

export default DivisionDetail
