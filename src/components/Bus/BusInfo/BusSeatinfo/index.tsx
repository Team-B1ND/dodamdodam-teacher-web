import React from 'react'
import * as S from './style'
import {
  useGetBusSeatsQuery,
  useGetStudentByBusIdQuery,
} from 'queries/Bus/bus.query'

interface BusSeatInfoProps {
  busId: number
}

const BusSeatInfo = ({ busId }: BusSeatInfoProps) => {
  const { data: busSeat } = useGetBusSeatsQuery(busId)

  // 좌석 상태 배열 생성
  const createSeatsArray = (occupiedSeats: number[]): boolean[][] => {
    const seats: boolean[][] = []

    // 10개의 행, 각 행에 4개의 좌석 (2개씩 묶음)
    for (let i = 0; i < 10; i++) {
      seats.push([false, false, false, false]) // 각 행에 4개의 좌석
    }

    // 마지막 행: 5개의 좌석
    seats.push([false, false, false, false, false])

    // 예약된 좌석을 true로 설정
    occupiedSeats.forEach((seatNumber) => {
      if (seatNumber <= 40) {
        const rowIndex = Math.floor((seatNumber - 1) / 4)
        const seatIndex = (seatNumber - 1) % 4
        seats[rowIndex][seatIndex] = true // 예약된 좌석
      } else if (seatNumber <= 45) {
        const rowIndex = 10 // 마지막 행
        const seatIndex = seatNumber - 41 // 41부터 45까지
        seats[rowIndex][seatIndex] = true // 예약된 좌석
      }
    })

    return seats
  }

  // 서버에서 받아온 좌석 번호
  const occupiedSeats = busSeat?.data?.busSeat || []
  const seats = createSeatsArray(occupiedSeats)

  return (
    <S.BusInfoWrap>
      <S.BusInfoHeader>
        '동대구역 1호차'
        <br /> 버스 이용 현황
      </S.BusInfoHeader>
      <S.Bus>
        {seats.map((row, rowIndex) => (
          <S.SeatRow key={rowIndex}>
            {rowIndex < 10 ? (
              // 앞쪽 10행
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {/* 첫 번째 그룹 (좌석 1, 2) */}
                  <S.Seat occupied={row[0]}>{rowIndex * 4 + 1}</S.Seat>
                  <S.Seat occupied={row[1]}>{rowIndex * 4 + 2}</S.Seat>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {/* 두 번째 그룹 (좌석 3, 4) */}
                  <S.Seat occupied={row[2]}>{rowIndex * 4 + 3}</S.Seat>
                  <S.Seat occupied={row[3]}>{rowIndex * 4 + 4}</S.Seat>
                </div>
              </div>
            ) : (
              // 마지막 행
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                {row.map((occupied, seatIndex) => {
                  const seatNumber = 41 + seatIndex // 41부터 45까지
                  return (
                    <S.Seat key={seatIndex} occupied={occupied}>
                      {seatNumber}
                    </S.Seat>
                  )
                })}
              </div>
            )}
          </S.SeatRow>
        ))}
      </S.Bus>
    </S.BusInfoWrap>
  )
}

export default BusSeatInfo
