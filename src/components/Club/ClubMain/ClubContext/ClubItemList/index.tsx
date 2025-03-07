import SkeletonComponent from "components/common/Skeleton";
import ClubItem from "./ClubItem";
import { useState } from "react";
import * as S from "./style";
import { DodamCheckBox, DodamErrorBoundary } from "@b1nd/dds-web";
import { useGetClubDateQuery } from "queries/Club/club.query";
import { ClubLine } from "./ClubItem/style";

const ClubItemList = (props: { item: string }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };
  const { data,isLoading } = useGetClubDateQuery();
  
    console.log(data);

  return (
    <>
      <S.ClubItemWrap>
        <S.WrapCheckBox>
          <DodamCheckBox onClick={handleCheckboxClick} isDisabled={isChecked} />
        </S.WrapCheckBox>

        <S.WrapClubName>동아리명</S.WrapClubName>

        <S.SubjectClub>주제</S.SubjectClub>

        <S.ShortDescription>설명</S.ShortDescription>

        <S.WhoClubLeader>부장</S.WhoClubLeader>
        <S.StateClub />
        <S.DetailClubContext>상태</S.DetailClubContext>
      </S.ClubItemWrap>
      <ClubLine/>
      <DodamErrorBoundary text="에러 발생" showButton={true}>
      { isLoading ? (
  <SkeletonComponent length={10} height={48} />
) : (
  data && data.data && Array.isArray(data.data) && data.data.length > 0 ? (
    data.data.map(value => 
      value.type === props.item ? (
        <ClubItem key={value.id} value={value} />
      ) : null
    )
  ) : (
    <p style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      데이터가 없습니다  {/* 이건 나중에 따로 Style에서 색깔이랑 폰트 지정하세요*/}
      </p>
  )
)}

      </DodamErrorBoundary>
    
    </>
  );
};

export default ClubItemList;
