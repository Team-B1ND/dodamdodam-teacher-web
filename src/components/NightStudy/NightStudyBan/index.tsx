import * as S from "./style";
import NightStudyBanHeader from "./NightStudyBanHeader";
import TableAttribute from "components/common/TableAttribute";
import {NIGHTSTUDY_BAN_TABLE_ITEMS} from "constants/LateNight/latenight.constant";
import ErrorBoundary from "components/common/ErrorBoundary";
import React, {Suspense} from "react";
import SkeletonComponent from "components/common/Skeleton";
import NightStudyBanItem from "./NightStudyBanItem";
import {useRecoilValue} from "recoil";
import {NightStudySearchAtom, NightStudySelectGradeAtom} from "stores/NightStudy/nightstudy.store";

const NightStudyBan = () => {
  const searchValue = useRecoilValue(NightStudySearchAtom);
  const selectedGrade = useRecoilValue(NightStudySelectGradeAtom);

  return (
    <S.NightStudyBanContainer>
      <NightStudyBanHeader/>
      <TableAttribute
        constant={NIGHTSTUDY_BAN_TABLE_ITEMS}
        thStyle={{width: "11%"}}
      >
        <ErrorBoundary text="학생들을 불러오지 못했습니다." showButton={true}>
          <Suspense fallback={<SkeletonComponent height={70} />}>
            <NightStudyBanItem
              searchValue={searchValue}
              selectedGrade={selectedGrade}
            />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
    </S.NightStudyBanContainer>
  )
}

export default React.memo(NightStudyBan)