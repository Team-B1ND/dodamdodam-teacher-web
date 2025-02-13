import React from 'react';
import * as S from './style';
import WriteTemplate from 'components/common/WriteTemplate';
import { useGroup } from 'hooks/Group/useGroup';

const AddGroup = () => {
  const { writeData, handleWriteDataChange, handleCreateGroup } = useGroup();
  return (
    <S.NoticeWriteWrap>
      <WriteTemplate
        title="그룹"
        titlePlaceholder="그룹명을 작성해주세요"
        contentPlaceholder="그룹 소개를 작성해주세요"
        buttonText="그룹 생성"
        groupWriteData={writeData}
        handleWriteDataChange={handleWriteDataChange}
        submitWrite={handleCreateGroup}
      />
    </S.NoticeWriteWrap>
  );
};

export default AddGroup;
