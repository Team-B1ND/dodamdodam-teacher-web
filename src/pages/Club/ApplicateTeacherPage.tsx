import React from 'react'
import * as S from './style'
import ClubDateList from 'components/Club/ClubDateList'
import ApplicateTeacher from 'components/Club/ApplicateTeacher'

const ApplicateTeacherPage = () => {
  return (
    <S.BackgroundClubManage style={{ padding: '1rem 2.5rem' }}>
      <ApplicateTeacher />
      <S.SideAlert>
        <div>
          <ClubDateList />
        </div>
      </S.SideAlert>
    </S.BackgroundClubManage>
  )
}

export default ApplicateTeacherPage
