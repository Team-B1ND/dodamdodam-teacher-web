import { TBody, TD, TR } from '@b1nd/b1nd-dodamdodam-ui'
import { ClubResponse } from 'types/Club/club.type'
import * as S from '../style'
import { DodamColor } from '@b1nd/dds-web'
import { useApplicateTeacher } from 'hooks/Club/useApplicateTeacher'
import { useGetMyMemberQuery } from 'queries/Member/member.query'

const ApplicateClubList = ({ data }: ClubResponse) => {
  const { submitApplicateTeacher } = useApplicateTeacher()
  const { data: teacher } = useGetMyMemberQuery()

  return (
    <TBody customStyle={S.ClubTBody}>
      {data
        .filter((item) => item.state === 'ALLOWED')
        .map((club, idx) => (
          <TR key={idx} customStyle={S.ClubItemTR}>
            <TD customStyle={{ width: '14.5%', padding: 0 }}>{club.name}</TD>
            <TD
              customStyle={{
                width: '9.5%',
                padding: 0,
                textAlign: 'left',
              }}
            >
              {club?.type === 'CREATIVE_ACTIVITY_CLUB' ? '전공' : '자율'}
            </TD>
            <TD
              customStyle={{
                width: '10.5%',
                padding: 0,
                textAlign: 'left',
                marginRight: '20px',
              }}
            >
              {club.shortDescription}
            </TD>
            <TD
              customStyle={{
                width: '13%',
                textAlign: 'left',
              }}
            >
              {/* club.leader가 존재할 경우 name을 출력 */}
              <p>{club.leader ? club.leader.name : '정보 없음'}</p>
            </TD>
            <TD
              customStyle={{
                width: '7%',
                padding: 0,
                cursor: 'pointer',
                color: `${!club.teacher?.name && DodamColor.blue50}`,
              }}
            >
              <p
                onClick={() =>
                  !club.teacher?.name &&
                  submitApplicateTeacher(
                    club.id,
                    teacher?.data?.name!,
                    club.name
                  )
                }
              >
                {club.teacher?.name || '추가 필요'}
              </p>
            </TD>
          </TR>
        ))}
    </TBody>
  )
}

export default ApplicateClubList
