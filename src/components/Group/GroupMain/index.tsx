import React, { Dispatch, SetStateAction, Suspense } from 'react';
import * as S from './style';
import NoticeSearchBar from 'components/common/NoticeSearchbar';
import { Plus, DodamSegmentedButton } from '@b1nd/dds-web';
import ErrorBoundary from 'components/common/ErrorBoundary';
import SkeletonComponent from 'components/common/Skeleton';
import GroupItem from './GroupItem';

interface Props {
  searchRef: React.RefObject<HTMLInputElement>;
  searchSubmit: () => void;
  isAtv: boolean;
  setAtv: React.Dispatch<React.SetStateAction<boolean>>;
  setSection: Dispatch<SetStateAction<string>>;
  setGroupId: Dispatch<SetStateAction<number | null>>;
}

const GroupMain = ({ searchRef, searchSubmit, isAtv, setAtv, setSection, setGroupId }: Props) => {
  return (
    <S.GroupBox>
      <NoticeSearchBar searchFn={searchSubmit} ref={searchRef} placeholder="검색할 그룹을 입력하세요" />
      <S.GroupPicker>
        <S.GroupTitle>
          <p>그룹</p>
          <S.GroupIcon onClick={() => setSection('createGroup')}>
            <Plus size={20} color="labelAlternative" />
          </S.GroupIcon>
        </S.GroupTitle>
        <DodamSegmentedButton
          width={200}
          num={2}
          type="block"
          onClick={() => setAtv((prev) => !prev)}
          data={[
            { text: '내 그룹', isAtv: isAtv },
            { text: '전체', isAtv: !isAtv },
          ]}
        />
        <S.GroupDataBox>
          <ErrorBoundary text="데이터를 불러오지 못했습니다." showButton={true}>
            <Suspense fallback={<SkeletonComponent height={48} customStyle={{ borderRadius: '8px' }} />}>
              <GroupItem isAtv={isAtv} setSection={setSection} setGroupId={setGroupId} />
            </Suspense>
          </ErrorBoundary>
        </S.GroupDataBox>
      </S.GroupPicker>
    </S.GroupBox>
  );
};

export default GroupMain;
