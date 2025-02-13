import React from 'react';
import * as S from './style';
import { DodamFilledButton, Home } from '@b1nd/dds-web';
import { NoticeWriteData } from 'repositories/Notice/NoticeRepository';
import { GroupWriteData } from 'repositories/Group/group.repository';

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
  writeData?: NoticeWriteData;
  groupWriteData?: GroupWriteData;
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
  groupWriteData,
}: WriteTemplateProps) => {
  return (
    <S.WriteWrap>
      <S.WriteTitle>{title}</S.WriteTitle>
      <S.WriteInputWrap>
        <input
          type="text"
          placeholder={titlePlaceholder}
          name={writeData ? 'title' : 'name'}
          value={writeData ? writeData.title : groupWriteData?.name}
          onChange={handleWriteDataChange}
        />
        <textarea
          placeholder={contentPlaceholder}
          name={writeData ? 'content' : 'description'}
          value={writeData ? writeData.content : groupWriteData?.description}
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
          text={buttonText}
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
