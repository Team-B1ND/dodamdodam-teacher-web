import OffbaseRedisual from 'components/Out/Redisual';
import SectionHeaderProvider from 'components/common/SectionHeaderProvider';

const OffbaseRedisualPage = () => {
  return (
    <SectionHeaderProvider title="잔류중" subTitle="현재 잔류 중인 학생이 보여집니다.">
      <OffbaseRedisual />
    </SectionHeaderProvider>
  );
};

export default OffbaseRedisualPage;
