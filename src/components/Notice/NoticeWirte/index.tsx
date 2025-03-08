import React, { Dispatch, SetStateAction } from 'react';
import * as S from './style';
import { Photo, File } from '@b1nd/dds-web';
import { useNotice } from 'hooks/Notice/useNotice';
import WriteTemplate from 'components/common/WriteTemplate';

const NoticeWrite = () => {
  const {
    writeData,
    handleWriteDataChange,
    imageRef,
    handleImageClick,
    fileRef,
    handleFileClick,
    handleImageChange,
    handleFileChange,
    files,
    image,
    submitWrite,
  } = useNotice();
  return (
    <S.NoticeWriteWrap>
      <WriteTemplate
        title="공지"
        titlePlaceholder="제목을 입력해주세요."
        contentPlaceholder="내용을 입력해주세요."
        handleWriteDataChange={handleWriteDataChange}
        imageRef={imageRef}
        fileRef={fileRef}
        handleFileClick={handleFileClick}
        handleFileChange={handleFileChange}
        handleImageClick={handleImageClick}
        handleImageChange={handleImageChange}
        submitWrite={submitWrite}
        writeData={writeData}
        fileIcon={<File color="labelAssistive" />}
        photoIcon={<Photo color="labelAssistive" />}
        buttonText="공지 작성"
        isViewImage={true}
        images={image}
      />
    </S.NoticeWriteWrap>
  );
};

export default NoticeWrite;
