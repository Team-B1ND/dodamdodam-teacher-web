import * as S from './style';
import { TBody, TD, TR } from '@b1nd/b1nd-dodamdodam-ui';
import profileImg from 'assets/profileImg.svg';
import { outSleepingDataFilter } from 'utils/Out/outSleepingDataFilter';
import { useGetRedisualQuery } from 'queries/Redisual/redisual.query';

interface OffBasePassProps {
  studentName: string;
  selectGrade: number;
  selectApproval: string | undefined;
  selectRoom: string;
}

const OffbaseRedisualItem = ({ selectApproval, selectGrade, studentName, selectRoom }: OffBasePassProps) => {
  const { data: redisualStudent } = useGetRedisualQuery();

  return (
    <>
      {!outSleepingDataFilter ||
      outSleepingDataFilter(redisualStudent, studentName, selectGrade, selectApproval, selectRoom)?.length === 0 ? (
        <S.NoneTile>현재 잔류 중인 학생이 없습니다.</S.NoneTile>
      ) : (
        <>
          <TBody customStyle={S.OffBaseTBody}>
            {outSleepingDataFilter(redisualStudent, studentName, selectGrade, selectApproval, selectRoom)?.map(
              (redisual) => (
                <TR customStyle={S.OffBaseTR}>
                  <TD customStyle={S.OffBaseTD}>
                    <S.MemberImage src={profileImg} />
                  </TD>
                  <TD customStyle={S.OffBaseTD}>{redisual.student.name}</TD>
                  <TD customStyle={S.OffBaseTD}>
                    {redisual.student.grade}학년
                    {redisual.student.room}반{redisual.student.number}번
                  </TD>
                  <TD customStyle={S.OffBaseTD}>
                    <div>{redisual.phone}</div>
                  </TD>
                </TR>
              )
            )}
          </TBody>
        </>
      )}
    </>
  );
};

export default OffbaseRedisualItem;
