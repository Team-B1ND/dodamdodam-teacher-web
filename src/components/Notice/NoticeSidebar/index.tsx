import * as S from './style';
import { NoticeSidebarType } from 'types/Notice/notice.type';
import { DodamSegmentedButton } from '@b1nd/dds-web';
import { useNoticeSidebar } from 'hooks/Notice/useNoticeSidebar';
import { Suspense } from 'react';
import ErrorBoundary from 'components/common/ErrorBoundary';

const NoticeSidebar = ({ title, isWrite }: NoticeSidebarType) => {
  const { pageData, categoryList, handleClickPageButton, handleChangeCategory } = useNoticeSidebar();

  return (
    <S.NoticeSidebarWrap>
      <DodamSegmentedButton
        num={pageData.length}
        type="block"
        data={pageData}
        width={404}
        height={50}
        onClick={handleClickPageButton}
        textColor="staticWhite"
        customBackbgroundColor="primaryNormal"
        customBackbgroundWrapColor="staticWhite"
      />
      <S.CategoryWrap>
        <S.Title>
          {isWrite ? (
            <>
              공지를 보낼
              <br />
              그룹을 선택해주세요
            </>
          ) : (
            title
          )}
        </S.Title>
        <S.Category>
          <ErrorBoundary text="카테고리 데이터 불러오기 실패" showButton={false}>
            <Suspense>
              {categoryList?.map((item) => (
                <S.CategoryTag key={item.id} isAtv={item.isAtv} onClick={() => handleChangeCategory(isWrite, item.id)}>
                  {item.name}
                </S.CategoryTag>
              ))}
            </Suspense>
          </ErrorBoundary>
        </S.Category>
      </S.CategoryWrap>
    </S.NoticeSidebarWrap>
  );
};
export default NoticeSidebar;
