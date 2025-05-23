import React from 'react'
import * as S from './style'
import { DodamFilledButton } from '@b1nd/dds-web'
import { NoticeWriteData } from 'repositories/Notice/noticeRepository'
import { DivisionWriteData } from 'repositories/Division/division.repository'

interface WriteTemplateProps {
  title: string
  titlePlaceholder: string
  contentPlaceholder: string
  handleWriteDataChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  imageRef?: React.RefObject<HTMLInputElement>
  fileRef?: React.RefObject<HTMLInputElement>
  handleFileClick?: () => void
  handleFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleImageClick?: () => void
  handleImageChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  submitWrite?: () => void
  handleDeleteImage?: (index: number) => void
  writeData?: NoticeWriteData
  divisionWriteData?: DivisionWriteData
  fileIcon?: React.ReactNode
  photoIcon?: React.ReactNode
  buttonText: string
  isViewImage?: boolean
  images?: string[]
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
  divisionWriteData,
  isViewImage,
  images,
}: WriteTemplateProps) => {
  return (
    <S.WriteWrap>
      <S.WriteTitle>{title}</S.WriteTitle>
      <S.WriteInputWrap>
        <input
          type='text'
          placeholder={titlePlaceholder}
          name={writeData ? 'title' : 'name'}
          value={writeData ? writeData.title : divisionWriteData?.name}
          onChange={handleWriteDataChange}
        />
        {isViewImage && (
          <>
            {images?.map((image, index) => (
              <img
                src={image}
                style={{ width: '30%', height: '40%', paddingTop: '1%' }}
                onClick={() =>
                  window.open(image, '_blank', 'width=800, height=800')
                }
              />
            ))}
          </>
        )}
        <textarea
          placeholder={contentPlaceholder}
          name={writeData ? 'content' : 'description'}
          value={writeData ? writeData.content : divisionWriteData?.description}
          onChange={handleWriteDataChange}
        ></textarea>
      </S.WriteInputWrap>
      <S.WriteFooter>
        <S.IconButtonWrap>
          <div onClick={handleFileClick}>
            {fileIcon}
            <input
              style={{ display: 'none' }}
              type='file'
              ref={fileRef}
              onChange={handleFileChange}
              multiple
              accept='.hwp, hwpx, .doc, .docx, .pdf, .xls, .xlsx, .ppt, .pptx'
            />
          </div>
          <div onClick={handleImageClick}>
            {photoIcon}
            <input
              style={{ display: 'none' }}
              type='file'
              ref={imageRef}
              onChange={handleImageChange}
              multiple
              accept='.jpg, .png, .jpeg, .gif, .bmp, .tiff, .ico, .webp'
            />
          </div>
        </S.IconButtonWrap>
        <DodamFilledButton
          text={buttonText}
          size='Large'
          onClick={submitWrite}
          backgroundColorType='Primary'
          textTheme='staticWhite'
          typography={['Body1', 'Bold']}
          width={120}
        />
      </S.WriteFooter>
    </S.WriteWrap>
  )
}

export default WriteTemplate
