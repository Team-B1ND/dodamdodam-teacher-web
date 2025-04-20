import {useRecoilState} from "recoil";
import {
  NightStudySearchAtom,
  NightStudySelectBanAtom,
  NightStudySelectGradeAtom
} from "stores/NightStudy/nightstudy.store";
import {SearchBar, Select} from "@b1nd/b1nd-dodamdodam-ui";
import {SelectSeachContainer} from "./style";

const NightStudyBanHeader = () => {
  const [selectGrade, setSelectGrade] = useRecoilState(NightStudySelectGradeAtom);
  const [selectBan, setSelectBan] = useRecoilState(NightStudySelectBanAtom);
  const [searchValue, setSearchValue] = useRecoilState(NightStudySearchAtom);

  return (
    <SelectSeachContainer>
      <SearchBar onChange={setSearchValue} value={searchValue} />
      <Select
        items={["전체보기", "1학년", "2학년", "3학년"]}
        value={selectGrade}
        onChange={setSelectGrade}
        zIndex={2}
      />
      <Select
        items={["정지여부", "전체", "정지", "미정지"]}
        value={selectBan}
        onChange={setSelectBan}
        zIndex={2}
      />
    </SelectSeachContainer>
  );
};

export default NightStudyBanHeader;
