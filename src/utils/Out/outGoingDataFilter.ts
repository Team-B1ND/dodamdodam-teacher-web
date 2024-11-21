import { changeRoom } from 'utils/Member/changeGrade';
import { OutResponse } from 'types/Out/out.type';

export const outGoingDataFilter = (
  OffBasePass: OutResponse | undefined,
  studentName: string,
  selectGrade: number,
  selectApproval: string | undefined,
  selectMealDemand: number,
  selectRoom: string
) => {
  const sortedData = OffBasePass?.data
    .filter((pass) => pass.student.name.includes(studentName))
    .filter((data) => data.student.grade === selectGrade || selectGrade === 0)
    .filter((data) => data.status === selectApproval || selectApproval === '')
    .filter((data) => data.student?.room === changeRoom(selectRoom) || changeRoom(selectRoom) === 0)
    .filter(
      (data) =>
        selectMealDemand === 0 ||
        (selectMealDemand === 1 && data.dinnerOrNot) ||
        (selectMealDemand === 2 && !data.dinnerOrNot) ||
        selectMealDemand === -1
    )
    .sort((a, b) => {
      if (a.status === 'PENDING' && b.status !== 'PENDING') {
        return -1;
      }
      if (a.status !== 'PENDING' && b.status === 'PENDING') {
        return 1;
      }

      if (a.student.grade === b.student.grade) {
        if (a.student.room === b.student.room) {
          return a.student.number - b.student.number;
        }
        return a.student.room - b.student.room;
      }
      return a.student.grade - b.student.grade;
    });
  return sortedData;
};
