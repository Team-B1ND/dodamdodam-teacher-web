import React, { Dispatch, SetStateAction, useEffect } from 'react'
import * as S from './style'
import {
  ArrowLeft,
  DodamDivider,
  DodamFilledButton,
  DodamSegmentedButton,
  Person,
} from '@b1nd/dds-web'
import { useGetPendingDivisionMemberQuery } from 'queries/Division/division.query'
import { DivisionNameAtom } from 'stores/Division/division.store'
import { useRecoilValue } from 'recoil'
import { Role } from 'types/Member/member.type'
import { roleTransform } from 'utils/Transform/roleTransform'
import { DivisionMemberStatus } from 'repositories/Division/division.repository'

interface WaitingMemberProps {
  divisonId: number
  setSection: Dispatch<SetStateAction<string>>
  patchDivisionMemberStatus: (
    status: DivisionMemberStatus,
    id: number,
    memberId: number[]
  ) => void
}

const WaitingMember = ({
  divisonId,
  setSection,
  patchDivisionMemberStatus,
}: WaitingMemberProps) => {
  const { data } = useGetPendingDivisionMemberQuery(divisonId!)
  const divisionName = useRecoilValue(DivisionNameAtom)
  const [selectedRole, setSelectedRole] = React.useState<Role>('STUDENT')

  const filteredMembers = React.useMemo(() => {
    return data?.data.filter((member) => member.role === selectedRole) ?? []
  }, [data?.data, selectedRole])

  useEffect(() => {
    setSelectedRole(selectedRole)
  }, [selectedRole])

  return (
    <S.WaitingMemberContainer>
      <S.WaitingMemberWrap>
        <S.WaitingMemberHeader>
          <S.BackIconWrap onClick={() => setSection('groupDetail')}>
            <ArrowLeft size={24} color='labelNormal' />
          </S.BackIconWrap>
          <S.WaitingMemberTitle>
            '{divisionName!}' 그룹 <br />
            가입 신청 대기 중인 멤버
          </S.WaitingMemberTitle>
        </S.WaitingMemberHeader>
        <DodamDivider type='Small' />
        <S.WaitingMemberList>
          <DodamSegmentedButton
            width={200}
            num={3}
            type='inline'
            data={[
              { text: '학생', isAtv: selectedRole === 'STUDENT' },
              { text: '학부모', isAtv: selectedRole === 'PARENT' },
              { text: '선생님', isAtv: selectedRole === 'TEACHER' },
            ]}
            onClick={() => {
              if (selectedRole === 'STUDENT') setSelectedRole('PARENT')
              else if (selectedRole === 'PARENT') setSelectedRole('TEACHER')
              else setSelectedRole('STUDENT')
            }}
          />
          <S.ListWrap>
            <p>{roleTransform(selectedRole)}</p>
            <S.ListItemWrap>
              {filteredMembers.map((member) => (
                <S.MemberCell key={member.id}>
                  <S.MemberInfo>
                    <S.MemberInfoWrap>
                      <Person size={28} />
                      <p>{member.memberName}</p>
                      <span>
                        {member.role === 'STUDENT' &&
                          `${member.grade}학년 ${member.room}반 ${member.number}번`}
                      </span>
                    </S.MemberInfoWrap>
                    <S.MemberRole>{roleTransform(member.role)}</S.MemberRole>
                  </S.MemberInfo>
                  <S.ButtonWrap>
                    <DodamFilledButton
                      text='거절'
                      size='Small'
                      typography={['Caption1', 'Bold']}
                      textTheme='labelNetural'
                      backgroundColorType='Assisitive'
                      onClick={() =>
                        patchDivisionMemberStatus('REJECTED', divisonId, [
                          member.id,
                        ])
                      }
                    />
                    <DodamFilledButton
                      text='승인'
                      size='Small'
                      typography={['Caption1', 'Bold']}
                      textTheme='staticWhite'
                      backgroundColorType='Primary'
                      onClick={() =>
                        patchDivisionMemberStatus('ALLOWED', divisonId, [
                          member.id,
                        ])
                      }
                    />
                  </S.ButtonWrap>
                </S.MemberCell>
              ))}
            </S.ListItemWrap>
          </S.ListWrap>
        </S.WaitingMemberList>
      </S.WaitingMemberWrap>
    </S.WaitingMemberContainer>
  )
}

export default WaitingMember
