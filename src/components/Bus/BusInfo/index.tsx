import React, { Dispatch, SetStateAction } from 'react'
import * as S from './style'
import { ArrowLeft, Avatar, Trash } from '@b1nd/dds-web'
import BusSeatInfo from './BusSeatinfo'
import { useGetStudentByBusIdQuery } from 'queries/Bus/bus.query'
import { BusListByPeriod, BusListMember } from 'types/Bus/bus.type'
import { useDeleteBus } from 'hooks/Bus/useDeleteBus'

interface BusInfoProps {
  setSection: Dispatch<SetStateAction<string>>
  busId: number
  busMemberList: BusListMember[]
  busData: BusListByPeriod
}

const BusInfo = ({
  setSection,
  busId,
  busMemberList,
  busData,
}: BusInfoProps) => {
  const { handleDeleteBusClick } = useDeleteBus({ setSection })
  return (
    <>
      <S.BusInfoWrap>
        <S.BusInfoHeaderWrap>
          <S.IconWrap onClick={() => setSection('main')}>
            <ArrowLeft color='labelNormal' size={24} />
          </S.IconWrap>
          <S.BusInfoTitleWrap>
            <div>
              <h1>{busData.bus.busName}</h1>
              <span>{busData.bus.description}</span>
            </div>
            <S.IconWrap onClick={() => handleDeleteBusClick(busId)}>
              <Trash color='labelNormal' size={28} />
            </S.IconWrap>
          </S.BusInfoTitleWrap>
        </S.BusInfoHeaderWrap>
        <S.BusInfoListWrap>
          <p>학생</p>
          <S.BusInfoMemberWrap>
            {busMemberList.length ? (
              busMemberList.map((member) => (
                <S.MemberCell key={member.memberId}>
                  <div>
                    <Avatar size='small' />
                    <h1>{member.name}</h1>
                    <span>1학년 2반 3번</span>
                  </div>
                  <p>{member.seatNumber}</p>
                </S.MemberCell>
              ))
            ) : (
              <p>버스에 학생이 없습니다.</p>
            )}
          </S.BusInfoMemberWrap>
        </S.BusInfoListWrap>
      </S.BusInfoWrap>
      <BusSeatInfo busId={busId} />
    </>
  )
}

export default BusInfo
