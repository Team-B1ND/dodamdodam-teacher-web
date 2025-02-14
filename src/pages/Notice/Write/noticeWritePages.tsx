import NoticeWrite from 'components/Notice/NoticeWirte';
import * as S from './style';

//실수로 앞에 글자 대문자로 써서 파일이름을 뒤에 s를 붙임 나중에 다 만들고 s 때고 올리면 됌
const NoticeWritePage = () => {
  return (
    <S.NoticeBox>
      <NoticeWrite />
    </S.NoticeBox>
  );
};
export default NoticeWritePage;
