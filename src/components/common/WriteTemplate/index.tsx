import React from 'react';
import * as S from './style';
import { DodamFilledButton, Home } from '@b1nd/dds-web';
import { NoticeWriteData } from 'repositories/Notice/NoticeRepository';

interface WriteTemplateProps {
  title: string;
  titlePlaceholder: string;
  contentPlaceholder: string;
  handleWriteDataChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  imageRef?: React.RefObject<HTMLInputElement>;
  fileRef?: React.RefObject<HTMLInputElement>;
  handleFileClick?: () => void;
  handleFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageClick?: () => void;
  handleImageChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitWrite?: () => void;
  writeData: NoticeWriteData;
  fileIcon?: React.ReactNode;
  photoIcon?: React.ReactNode;
  buttonText: string;
}

const WriteTemplate = ({
  title,
  titlePlaceholder,
  contentPlaceholder,
  handleWriteDataChange,
  imageRef,
  fileRef,
  handleFileClick,
  handleFileChange,
  handleImageClick,
  handleImageChange,
  submitWrite,
  writeData,
  fileIcon,
  photoIcon,
  buttonText,
}: WriteTemplateProps) => {
  return (
    <S.WriteWrap>
      <S.WriteTitle>{title}</S.WriteTitle>
      <S.WriteInputWrap>
        <input
          type="text"
          placeholder={titlePlaceholder}
          name="title"
          value={writeData.title}
          onChange={handleWriteDataChange}
        />
        <textarea
          placeholder={contentPlaceholder}
          name="content"
          value={writeData.content}
          onChange={handleWriteDataChange}
        ></textarea>
      </S.WriteInputWrap>
      <S.WriteFooter>
        <S.IconButtonWrap>
          <div ref={fileRef} onClick={handleFileClick}>
            {fileIcon}
            <input style={{ display: 'none' }} type="file" ref={fileRef} onChange={handleFileChange} />
          </div>
          <div ref={imageRef} onClick={handleImageClick}>
            {photoIcon}
            <input style={{ display: 'none' }} type="file" ref={imageRef} onChange={handleImageChange} />
          </div>
        </S.IconButtonWrap>
        <DodamFilledButton
          text="공지 작성"
          size="Large"
          onClick={submitWrite}
          backgroundColorType="Primary"
          textTheme="staticWhite"
          typography={['Body1', 'Bold']}
          width={120}
        />
      </S.WriteFooter>
    </S.WriteWrap>
  );
};

export default WriteTemplate;
