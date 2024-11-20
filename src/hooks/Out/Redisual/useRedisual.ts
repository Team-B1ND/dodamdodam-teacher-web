import { QUERY_KEYS } from 'queries/queryKey';
import { useGetRedisualQuery } from 'queries/Redisual/redisual.query';
import { useEffect, useState } from 'react';

const useRedisual = () => {
  const { data: redisual } = useGetRedisualQuery();
  const [redisualStudent, setRedisualStudent] = useState([
    {
      이름: '',
      반번호: '',
      전화번호: '',
      비고: '',
    },
  ]);

  useEffect(() => {
    if (redisual?.data) {
      const newData = redisual.data.map((data) => ({
        이름: data.student.name,
        반번호: `${data.student.grade}학년 ${data.student.room}반 ${data.student.number}번`,
        전화번호: data.phone,
        비고: '',
      }));
      setRedisualStudent(newData);
    }
  }, [redisual]);

  return {
    redisualStudent,
  };
};

export default useRedisual;
