import React from 'react';
import * as S from './style';
import { ArrowLeft, DodamDivider, Menu, Person } from '@b1nd/dds-web';
import { useGetGroupDetailQuery, useGetGroupMemberQuery } from 'queries/Group/group.query';
import { GroupMember } from 'repositories/Group/group.repository';
import { useParams } from 'react-router-dom';

const GroupDetail = () => {
  const { id } = useParams();
  const { data } = useGetGroupDetailQuery(+id!);
  const { data: memberData } = useGetGroupMemberQuery('ALLOWED', +id!);

  const adminMembers = memberData?.data.filter((member) => member.permission === 'ADMIN') || [];
  const writerMembers = memberData?.data.filter((member) => member.permission === 'WRITER') || [];
  const readerMembers = memberData?.data.filter((member) => member.permission === 'READER') || [];

  const renderMemberCell = (member: GroupMember) => (
    <S.MemberCell key={member.id}>
      <S.MemberInfo>
        <Person size={24} />
        <S.MemberName>{member.memberName}</S.MemberName>
      </S.MemberInfo>
      <S.MemberRole>
        {member.role === 'STUDENT' && '학생'}
        {member.role === 'TEACHER' && '선생님'}
        {member.role === 'ADMIN' && '관리자'}
      </S.MemberRole>
    </S.MemberCell>
  );

  return (
    <S.GroupDetailWrap>
      <S.GroupWrap>
        <S.BackIconWrap>
          <ArrowLeft size={24} />
        </S.BackIconWrap>
        <S.GroupDetailHeader>
          <S.GroupDetailTitle>
            <h1>{data?.data.divisionName}</h1>
            <Menu color={'labelAssisitive'} />
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
    </S.GroupDetailWrap>
  );
};

export default GroupDetail;
