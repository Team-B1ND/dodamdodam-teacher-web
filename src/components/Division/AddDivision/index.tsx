import React from 'react'
import * as S from './style'
import WriteTemplate from 'components/common/WriteTemplate'
import { useDivision } from 'hooks/Division/useDivision'

const AddDivision = () => {
  const { writeData, handleWriteDataChange, handleCreateDivision } = useDivision()
  return (
    <S.AddDivisionWrap>
      <WriteTemplate
        title='그룹'
        titlePlaceholder='그룹명을 작성해주세요'
        contentPlaceholder='그룹 소개를 작성해주세요'
        buttonText='그룹 생성'
        divisionWriteData={writeData}
        handleWriteDataChange={handleWriteDataChange}
        submitWrite={handleCreateDivision}
      />
    </S.AddDivisionWrap>
  )
}

export default AddDivision
