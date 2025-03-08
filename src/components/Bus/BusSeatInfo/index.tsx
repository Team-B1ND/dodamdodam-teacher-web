import React from 'react'
import * as S from './style'

const BusSeatInfo = () => {
  const seats = [
    [false, true, false, false],
    [false, false, false, false],
    [true, true, false, false],
    [true, true, false, false],
    [true, true, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false, false], // 마지막 행
  ]

  return (
    <S.BusInfoWrap>
      <S.BusInfoHeader>
        '동대구역 1호차'
        <br /> 버스 이용 현황
      </S.BusInfoHeader>
      <S.Bus>
        {seats.map((row, rowIndex) => (
          <S.SeatRow key={rowIndex}>
            {/* 마지막 행인지 확인 */}
            {rowIndex < seats.length - 1 ? (
              <>
                {row.map((occupied, seatIndex) => {
                  // 좌석 번호 계산
                  const seatNumber = rowIndex * 4 + seatIndex + 1
                  if (seatIndex % 2 === 0) {
                    return (
                      <div
                        key={seatIndex}
                        style={{ display: 'flex', gap: '1.2rem' }}
                      >
                        <S.Seat key={seatIndex} occupied={occupied}>
                          {seatNumber}
                        </S.Seat>
                        {seatIndex + 1 < row.length && (
                          <S.Seat
                            key={seatIndex + 1}
                            occupied={row[seatIndex + 1]}
                          >
                            {seatNumber + 1}
                          </S.Seat>
                        )}
                      </div>
                    )
                  }
                })}
              </>
            ) : (
              // 마지막 행은 원래대로 표시
              row.map((occupied, seatIndex) => {
                const seatNumber = rowIndex * 4 + seatIndex + 1
                return (
                  <S.Seat key={seatIndex} occupied={occupied}>
                    {seatNumber}
                  </S.Seat>
                )
              })
            )}
          </S.SeatRow>
        ))}
      </S.Bus>
    </S.BusInfoWrap>
  )
}

export default BusSeatInfo
