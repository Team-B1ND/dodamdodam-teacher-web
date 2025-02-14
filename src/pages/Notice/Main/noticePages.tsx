import * as S from './style';
import NoticeSearchBar from 'components/common/NoticeSearchbar';
import { useNotice } from 'hooks/Notice/useNotice';

const NoticePage = () => {
  const { ...notice } = useNotice();
  return (
    <S.NoticeBox>
      <NoticeSearchBar ref={notice.searchRef} searchFn={notice.searchSubmit} />
    </S.NoticeBox>
  );
};
export default NoticePage;
