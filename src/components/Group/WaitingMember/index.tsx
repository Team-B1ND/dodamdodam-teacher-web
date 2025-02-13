import React, { Dispatch, SetStateAction } from 'react';
import * as S from './style';
import { ArrowLeft, DodamDivider, DodamFilledButton, DodamSegmentedButton, Person } from '@b1nd/dds-web';
import { useGetPendingGroupMemberQuery } from 'queries/Group/group.query';
import { useGroup } from 'hooks/Group/useGroup';
import { GroupNameAtom } from 'stores/Notice/Group/group.store';
import { useRecoilValue } from 'recoil';

interface WaitingMemberProps {
  groupId: number;
  setSection: Dispatch<SetStateAction<string>>;
}

const WaitingMember = ({ groupId, setSection }: WaitingMemberProps) => {
  const { data } = useGetPendingGroupMemberQuery(groupId!);
  const groupName = useRecoilValue(GroupNameAtom);
  return (
    <S.WaitingMemberContainer>
      <S.WaitingMemberWrap>
        <S.WaitingMemberHeader>
          <S.BackIconWrap onClick={() => setSection('groupDetail')}>
            <ArrowLeft size={24} color="labelNormal" />
          </S.BackIconWrap>
          <S.WaitingMemberTitle>
            '{groupName!}' 그룹 <br />
            가입 신청 대기 중인 멤버
          </S.WaitingMemberTitle>
        </S.WaitingMemberHeader>
        <DodamDivider type="Small" />
        <S.WaitingMemberList>
          <DodamSegmentedButton
            width={200}
            num={3}
            type="inline"
            data={[
              { text: '학생', isAtv: true },
              { text: '학부모', isAtv: false },
              { text: '선생님', isAtv: false },
            ]}
          />
          <S.ListWrap>
            <p>학생</p>
            <S.ListItemWrap>
              {data?.data.map((member) => (
                <S.MemberCell key={member.id}>
                  <S.MemberInfo>
                    <S.MemberInfoWrap>
                      <Person size={28} />
                      <p>{member.memberName}</p>
                      <span>
                        {member.grade}학년 {member.room}반 {member.number}번
                      </span>
                    </S.MemberInfoWrap>
                    <S.MemberRole>{member.role}</S.MemberRole>
                  </S.MemberInfo>
                  <S.ButtonWrap>
                    <DodamFilledButton
                      text="거절"
                      size="Small"
                      typography={['Caption1', 'Bold']}
                      textTheme="labelNetural"
                      backgroundColorType="Assisitive"
                    />
                    <DodamFilledButton
                      text="승인"
                      size="Small"
                      typography={['Caption1', 'Bold']}
                      textTheme="staticWhite"
                      backgroundColorType="Primary"
                    />
                  </S.ButtonWrap>
                </S.MemberCell>
              ))}
            </S.ListItemWrap>
          </S.ListWrap>
        </S.WaitingMemberList>
      </S.WaitingMemberWrap>
    </S.WaitingMemberContainer>
  );
};

export default WaitingMember;
