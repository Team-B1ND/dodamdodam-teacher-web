import ClubDateList from "components/Club/ClubDateList";
import ClubMainView from "components/Club/ClubMain";
import * as S from "./style"

const ClubManagePage = () => {
  return (
    <S.BackgroundClubManage>
      <ClubMainView />
      <S.SideAlert>
        <div>
          <ClubDateList />
        </div>
      </S.SideAlert>
    </S.BackgroundClubManage>
  );
};

export default ClubManagePage;
