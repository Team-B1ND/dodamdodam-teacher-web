import React, { Dispatch, SetStateAction } from 'react'
import * as S from './style'
import {
  ArrowLeft,
  Dialog,
  DodamDialog,
  DodamSegmentedButton,
  Person,
  Trash,
} from '@b1nd/dds-web'
import { useDeleteBus } from 'hooks/Bus/useDeleteBus'
import { BusDateAndListResponse } from 'types/Bus/bus.type'
import { useRecoilState } from 'recoil'
import { SelectBusDataAtom } from 'stores/Bus/bus.store'

interface BusInfoProps {
  setSection: Dispatch<SetStateAction<string>>
}

const BusInfo = ({ setSection }: BusInfoProps) => {
  const busData = useRecoilState(SelectBusDataAtom)

  const { handleDeleteBusClick } = useDeleteBus({ setSection })
  return (
    <S.WaitingMemberContainer>
      <S.WaitingMemberWrap>
        <S.WaitingMemberHeader>
          <S.BackIconWrap onClick={() => setSection('main')}>
            <ArrowLeft size={24} color='labelNormal' />
          </S.BackIconWrap>
          <S.WaitingMemberTitle>
            <h1>{busData[0].bus.busName}</h1>
            <S.BackIconWrap
              onClick={() => handleDeleteBusClick(busData[0].bus.id)}
            >
              <Trash size={24} color='labelNormal' />
            </S.BackIconWrap>
          </S.WaitingMemberTitle>
        </S.WaitingMemberHeader>
        <S.WaitingMemberList>
          <DodamSegmentedButton
            width={220}
            num={2}
            type='inline'
            data={[
              { text: '탑승', isAtv: true },
              { text: '미탑승', isAtv: false },
            ]}
          />
          <S.ListWrap>
            <p>학생</p>
            <S.ListItemWrap>
              {/* <S.MemberCell>
                <S.MemberInfo>
                  <S.MemberInfoWrap>
                    <Person size={28} />
                    <p>박병준</p>
                    <span>1학년 2반 13번</span>
                  </S.MemberInfoWrap>
                  <S.MemberRole>학생</S.MemberRole>
                </S.MemberInfo>
              </S.MemberCell> */}
              
            </S.ListItemWrap>
          </S.ListWrap>
        </S.WaitingMemberList>
      </S.WaitingMemberWrap>
    </S.WaitingMemberContainer>
  )
}

export default BusInfo
