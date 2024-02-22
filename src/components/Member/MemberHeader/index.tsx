import { SearchBar, SectionHeader, Select } from "@b1nd/b1nd-dodamdodam-ui";
import { SelectSeachContainer } from "../style";
import { useRecoilState } from "recoil";
import { MemberSearch, MemberSelectGrade } from "stores/Member/member.store";

const MemberHeader = () => {
  const [selectGrade, setSelectGrade] = useRecoilState(MemberSelectGrade);
  const [searchValue, setSearchValue] = useRecoilState(MemberSearch);

  return (
    <>
      <SectionHeader
        title="구성원"
        subTitle="현재 가입한 구성원을 볼 수 있습니다."
      />
      <SelectSeachContainer>
        <Select
          items={["전체보기", "1학년", "2학년", "3학년", "선생님"]}
          value={selectGrade}
          onChange={setSelectGrade}
          zIndex={2}
        />
        <SearchBar onChange={setSearchValue} value={searchValue} />
      </SelectSeachContainer>
    </>
  );
};

export default MemberHeader;
