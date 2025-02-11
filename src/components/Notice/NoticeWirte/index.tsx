import React from 'react';
import * as S from './style';
import { DodamFilledButton } from '@b1nd/dds-web';
import { useNotice } from 'hooks/Notice/useNotice';

const NoticeWrite = () => {
  const { writeData, handleWriteDataChange } = useNotice();
  return (
    <S.NoticeWriteWrap>
      <S.WriteWrap>
        <S.WriteTitle>공지</S.WriteTitle>
        <S.WriteInputWrap>
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            name="title"
            value={writeData.title}
            onChange={handleWriteDataChange}
          />
          <textarea
            placeholder="내용을 입력해주세요."
            name="content"
            value={writeData.content}
            onChange={handleWriteDataChange}
          ></textarea>
        </S.WriteInputWrap>
        <S.WriteFooter>
          <S.IconButtonWrap></S.IconButtonWrap>
          <DodamFilledButton
            text="공지 작성"
            size="Large"
            onClick={() => {}}
            backgroundColorType="Primary"
            textTheme="staticWhite"
            typography={['Body1', 'Bold']}
            width={120}
          />
        </S.WriteFooter>
      </S.WriteWrap>
    </S.NoticeWriteWrap>
  );
};

export default NoticeWrite;
