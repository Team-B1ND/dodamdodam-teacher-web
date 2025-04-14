import { useState } from 'react'
import * as S from './style'
import { DodamSegmentedButton } from '@b1nd/dds-web'
import TableAttribute from 'components/common/TableAttribute'
import { APPLICATE_TEACHER_TABLE_ITEMS } from './constants'
import { useGetClubDateQuery } from 'queries/Club/club.query'
import ApplicateClubList from './ClubList'

const ApplicateTeacher = () => {
  const { data } = useGetClubDateQuery()
  const [selectedType, setSelectedType] = useState('CREATIVE_ACTIVITY_CLUB') // 기본값 설정

  // 동아리 타입에 따라 필터링
  const filteredClubs = data?.data.filter((club) => {
    return selectedType === 'CREATIVE_ACTIVITY_CLUB'
      ? club?.type === 'CREATIVE_ACTIVITY_CLUB'
      : club?.type === 'SELF_DIRECT_ACTIVITY_CLUB'
  })

  return (
    <S.ApplicateTeacherWrapper>
      <S.ApplicateTeacherTitle>동아리</S.ApplicateTeacherTitle>
      <DodamSegmentedButton
        num={2}
        type='inline'
        data={[
          {
            text: '창체 동아리',
            isAtv: selectedType === 'CREATIVE_ACTIVITY_CLUB',
          },
          {
            text: '자율 동아리',
            isAtv: selectedType === 'SELF_DIRECT_ACTIVITY_CLUB',
          },
        ]}
        onClick={(text) => {
          if (text === '창체 동아리') {
            setSelectedType('CREATIVE_ACTIVITY_CLUB')
          } else if (text === '자율 동아리') {
            setSelectedType('SELF_DIRECT_ACTIVITY_CLUB')
          }
        }}
      />
      <TableAttribute
        constant={APPLICATE_TEACHER_TABLE_ITEMS}
        trStyle={{
          width: '100%',
          height: '50px',
          fontSize: '17px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '0.5px solid #dcddde',
          borderBottom: '1px solid #dcddde',
        }}
      >
        {filteredClubs?.map((club, idx) => (
          <ApplicateClubList key={idx} data={[club]} />
        ))}
      </TableAttribute>
    </S.ApplicateTeacherWrapper>
  )
}

export default ApplicateTeacher
