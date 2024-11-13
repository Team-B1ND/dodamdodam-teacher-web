import { Button, TBody, TD, TR } from '@b1nd/b1nd-dodamdodam-ui';
import { SCHEDULE_TABLE_ITEMS } from 'components/Schedule/constant';
import TableAttribute from 'components/common/TableAttribute';
import { useGetSchedulesByPeriodQuery } from 'queries/Schedule/schedule.query';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import dataTransform from 'utils/Transform/dataTransform';
import { TBodyStyle, TRStyle } from './style';
import useDeleteSchedule from 'hooks/Schedule/useDeleteSchedule';
import dayjs from 'dayjs';

const TableView = () => {
  const { ref, inView } = useInView();
  const { onDeleteSchedule } = useDeleteSchedule();
  const { data: scheduleData } = useGetSchedulesByPeriodQuery({
    startAt: dayjs().format('YYYY-MM-DD'), // 오늘 날짜
    endAt: dayjs().endOf('month').format('YYYY-MM-DD'), // 이번 달 마지막 날
  });

  return (
    <TableAttribute constant={SCHEDULE_TABLE_ITEMS} thStyle={{ width: '10.5%' }}>
      <TBody customStyle={TBodyStyle}>
        {scheduleData?.data.map((schedule) => (
          <TR customStyle={TRStyle}>
            <TD customStyle={{ width: '10.5%' }}>
              <Button ButtonType="agree">{schedule.type === 'ACADEMIC' ? '학사 일정' : '휴일'}</Button>
            </TD>
            <TD customStyle={{ width: '10.5%' }}>{schedule.name}</TD>
            <TD customStyle={{ width: '10.5%' }}>
              {schedule.targetGrades.map((grade, idx) => (
                <>
                  {dataTransform.convertGrade(grade)}
                  {idx !== schedule.targetGrades.length - 1 && ', '}
                </>
              ))}
            </TD>
            <TD customStyle={{ width: '10.5%' }}>{dataTransform.convertPlaceName(schedule.place)}</TD>
            <TD customStyle={{ width: '10.5%' }}>{schedule.date[0]} </TD>
            <TD customStyle={{ width: '10.5%' }}>{schedule.date[1]} </TD>
            <TD customStyle={{ width: '10.5%' }}>
              <Button ButtonType="disagreed" onClick={() => onDeleteSchedule(schedule.id)}>
                삭제
              </Button>
            </TD>
          </TR>
        ))}
      </TBody>
      <div ref={ref}></div>
    </TableAttribute>
  );
};

export default TableView;
