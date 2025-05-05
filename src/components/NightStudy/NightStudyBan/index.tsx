import * as S from "./style";
import NightStudyBanHeader from "./NightStudyBanHeader";
import TableAttribute from "components/common/TableAttribute";
import {NIGHTSTUDY_BAN_TABLE_ITEMS} from "constants/LateNight/latenight.constant";
import React, {Suspense, useState} from "react";
import SkeletonComponent from "components/common/Skeleton";
import NightStudyBanItem from "./NightStudyBanItem";
import {useRecoilValue} from "recoil";
import {
  NightStudyModalAtom,
  NightStudySearchAtom,
  NightStudySelectBanAtom,
  NightStudySelectGradeAtom
} from "stores/NightStudy/nightstudy.store";
import NightStudyBanModal from "./NightStudyBanModal";
import {DodamErrorBoundary} from "@b1nd/dds-web";

const NightStudyBan = () => {
  const searchValue = useRecoilValue(NightStudySearchAtom);
  const selectedStudent = useRecoilValue(NightStudyModalAtom);
  const selectedGrade = useRecoilValue(NightStudySelectGradeAtom);
  const selectedBan = useRecoilValue(NightStudySelectBanAtom);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.NightStudyBanContainer>
      <NightStudyBanHeader/>
      <TableAttribute
        constant={NIGHTSTUDY_BAN_TABLE_ITEMS}
        thStyle={{width: "11%"}}
      >
        <DodamErrorBoundary text="학생들을 불러오지 못했습니다." showButton={true}>
          <Suspense fallback={<SkeletonComponent height={70} />}>
            <NightStudyBanItem
              onSelectStudent={() => setIsOpen(true)}
              searchValue={searchValue}
              selectedGrade={selectedGrade}
              selectedBan={selectedBan}
            />
          </Suspense>
          <NightStudyBanModal isOpen={isOpen} onClose={() => setIsOpen(false)} student={selectedStudent}/>
        </DodamErrorBoundary>
      </TableAttribute>
    </S.NightStudyBanContainer>
  )
}

export default React.memo(NightStudyBan)