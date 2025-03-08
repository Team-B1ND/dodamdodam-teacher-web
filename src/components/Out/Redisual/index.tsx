import * as S from './style';
import { Suspense, useState } from 'react';
import ErrorBoundary from 'components/common/ErrorBoundary';
import TableAttribute from 'components/common/TableAttribute';
import TodayOffBaseItem from './RedisualItem/index';
import { REDISUAL_ITEMS } from 'constants/Out/offbase.constant';
import { SearchBar, Select } from '@b1nd/b1nd-dodamdodam-ui';
import { useRecoilState } from 'recoil';
import { SelectApprovalAtom, SelectGradeAtom } from 'stores/Out/out.store';
import { changeApproval } from 'utils/Out/changeApproval';
import { changeGrade } from 'utils/Member/changeGrade';
import { GRADE_ITEMS } from 'constants/Grade/grade.constant';
import CsvButton from 'components/common/ExtractCsvData';
import dayjs from 'dayjs';
import useOffBaseLeave from 'hooks/Out/OutSleeping/useOutsleeping';
import { PointSelectRoom } from 'stores/Point/point.store';
import { useGetRedisualQuery } from 'queries/Redisual/redisual.query';
import { redisualMemberCalc } from 'utils/Out/redisualMemberCalc';
import useRedisual from 'hooks/Out/Redisual/useRedisual';

const OffbaseRedisual = () => {
  const [studentName, setStudentName] = useState('');
  const [selectGrade, setSelectGrade] = useRecoilState(SelectGradeAtom);
  const [selectApproval, setSelectApproval] = useRecoilState(SelectApprovalAtom);
  const [room, setRoom] = useRecoilState(PointSelectRoom);

  const { redisualStudent } = useRedisual();

  const { data: redesualStudent } = useGetRedisualQuery();

  return (
    <>
      <S.OffBaseHeaderContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SearchBar value={studentName} onChange={setStudentName} />
          <span style={{ marginLeft: 10 }}>
            {redisualMemberCalc(redesualStudent?.data!).length === 0
              ? '오늘은 외박 잔류자가 없습니다.'
              : `오늘의 외박 잔류자 수 : ${redisualMemberCalc(redesualStudent?.data!).length}명`}
          </span>
        </div>
        <S.SelectContainer>
          <S.CsvButtonContainer>
            <CsvButton csvData={redisualStudent} fileName={dayjs().format('YYYY-MM-DD') + '잔류 중인 학생'} />
          </S.CsvButtonContainer>
          <Select items={GRADE_ITEMS} value={selectGrade} onChange={setSelectGrade} zIndex={2} />
          <Select
            items={['모든 학반', '1반', '2반', '3반', '4반']}
            value={room || '학반을 선택해주세요'}
            onChange={setRoom}
            zIndex={2}
          />
        </S.SelectContainer>
      </S.OffBaseHeaderContainer>

      <TableAttribute constant={REDISUAL_ITEMS} thStyle={{ width: '14%' }}>
        <ErrorBoundary text='오늘의 외박 잔류자를 불러오지 못했습니다.' showButton={true}>
          <Suspense fallback={<>로딩중...</>}>
            <TodayOffBaseItem
              selectRoom={room}
              selectApproval={changeApproval(selectApproval)}
              selectGrade={changeGrade(selectGrade)}
              studentName={studentName}
            />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
    </>
  );
};

export default OffbaseRedisual;
