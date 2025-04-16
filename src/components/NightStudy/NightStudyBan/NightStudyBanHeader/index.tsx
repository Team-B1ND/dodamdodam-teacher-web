import {useRecoilState} from "recoil";
import {NightStudySearchAtom, NightStudySelectGradeAtom} from "stores/NightStudy/nightstudy.store";
import {SearchBar, Select} from "@b1nd/b1nd-dodamdodam-ui";
import {SelectSeachContainer} from "./style";

const NightStudyBanHeader = () => {
  const [selectGrade, setSelectGrade] = useRecoilState(NightStudySelectGradeAtom);
  const [searchValue, setSearchValue] = useRecoilState(NightStudySearchAtom);

  return (
    <SelectSeachContainer>
      <Select
        items={["전체보기", "1학년", "2학년", "3학년"]}
        value={selectGrade}
        onChange={setSelectGrade}
        zIndex={2}
      />
      <SearchBar onChange={setSearchValue} value={searchValue} />
    </SelectSeachContainer>
  );
};

export default NightStudyBanHeader;
