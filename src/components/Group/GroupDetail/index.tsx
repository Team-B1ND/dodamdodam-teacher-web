import React, { useState } from 'react';
import * as S from './style';
import { ArrowLeft, DodamDivider, Menu, Person } from '@b1nd/dds-web';
import {
  useGetGroupDetailQuery,
  useGetAllowedGroupMemberQuery,
  useGetPendingGroupMemberQuery,
} from 'queries/Group/group.query';
import { GroupMember } from 'repositories/Group/group.repository';
import { useParams } from 'react-router-dom';
import GroupDetailModal from './Modal/groupDetailModal';
import MemberInfoModal from './Modal/memberInfoModal';
import { useGroup } from 'hooks/Group/useGroup';

const GroupDetail = () => {
  const { id } = useParams();
  const { data } = useGetGroupDetailQuery(+id!);
  const { data: memberData } = useGetAllowedGroupMemberQuery(+id!);
  const { data: pendingData } = useGetPendingGroupMemberQuery(+id!);

  const adminMembers = memberData?.data.filter((member) => member.permission === 'ADMIN') || [];
  const writerMembers = memberData?.data.filter((member) => member.permission === 'WRITER') || [];
  const readerMembers = memberData?.data.filter((member) => member.permission === 'READER') || [];

  const [selectedMember, setSelectedMember] = useState<GroupMember | null>(null);

  const renderMemberCell = (member: GroupMember) => (
    <S.MemberCell
      key={member.id}
      onClick={() => {
        setSelectedMember(member);
        setMemberInfoModal(true);
      }}
    >
      <S.MemberInfo>
        {member.profileImage ? <img src={member.profileImage} /> : <Person size={24} />}
        <S.MemberName>{member.memberName}</S.MemberName>
      </S.MemberInfo>
      <S.MemberRole>
        {member.role === 'STUDENT' && '학생'}
        {member.role === 'TEACHER' && '선생님'}
        {member.role === 'ADMIN' && '관리자'}
      </S.MemberRole>
    </S.MemberCell>
  );

  const [detailModal, setDetailModal] = useState(false);
  const [memberInfoModal, setMemberInfoModal] = useState(false);
  const { patchGroupMemberStatus } = useGroup();

  return (
    <S.GroupDetailWrap>
      <S.GroupWrap>
        <S.BackIconWrap>
          <ArrowLeft size={24} />
        </S.BackIconWrap>
        <S.GroupDetailHeader>
          <S.GroupDetailTitle>
            <h1>{data?.data.divisionName}</h1>
            <div
              style={{ width: 'fit-content', height: 'fit-content', cursor: 'pointer' }}
              onClick={() => setDetailModal(true)}
            >
              <Menu color={'labelAssisitive'} />
            </div>
          </S.GroupDetailTitle>
          <S.GroupDetailDescription>{data?.data.description}</S.GroupDetailDescription>
        </S.GroupDetailHeader>
        <DodamDivider type="Small" />
        <S.GroupDetailMemberWrap>
          <S.GroupDetailTitle>
            <h1>멤버</h1>
          </S.GroupDetailTitle>
          <S.MemberWrap>
            <S.LeftSection>
              <S.AdminMembersWrap>
                <S.MemberWrapTitle>관리자</S.MemberWrapTitle>
                <S.MemberList>{adminMembers.map(renderMemberCell)}</S.MemberList>
                <DodamDivider type="Small" />
                <S.MemberWrapTitle>부관리자</S.MemberWrapTitle>
                <S.MemberList>{writerMembers.map(renderMemberCell)}</S.MemberList>
              </S.AdminMembersWrap>
            </S.LeftSection>
            <S.RightSection>
              <S.MemberWrapTitle>멤버</S.MemberWrapTitle>
              <S.MembersWrap>{readerMembers.map(renderMemberCell)}</S.MembersWrap>
            </S.RightSection>
          </S.MemberWrap>
        </S.GroupDetailMemberWrap>
      </S.GroupWrap>
      <GroupDetailModal
        isOpen={detailModal}
        onClose={() => setDetailModal(false)}
        pendingMembers={pendingData?.data.length!}
      />
      <MemberInfoModal
        isOpen={memberInfoModal}
        onClose={() => {
          setMemberInfoModal(false);
          setSelectedMember(null);
        }}
        member={selectedMember!}
        patchGroupMemberStatus={() => patchGroupMemberStatus('REJECTED', +id!, [selectedMember!.id])}
      />
    </S.GroupDetailWrap>
  );
};

export default GroupDetail;
