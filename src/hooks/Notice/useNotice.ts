import { useNoticeWriteMutation } from 'queries/Notice/notice.query';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FileData, NoticeWriteData } from 'repositories/Notice/NoticeRepository';
export const useNotice = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const searchSubmit = () => {
    console.log('검색어 post');
  };

  const [files, setFiles] = useState<FileData[]>([
    {
      url: '',
      name: '',
      fileType: 'IMAGE',
    },
  ]);

  const [writeData, setWriteData] = useState<NoticeWriteData>({
    title: '',
    content: '',
    files: files,
    divisions: [],
  });

  useEffect(() => {
    setWriteData({
      ...writeData,
      files: files,
    });
  }, [files]);

  const handleWriteDataChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setWriteData((prev) => ({ ...prev, [name]: value }));
    },
    [setWriteData]
  );

  const imageRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    imageRef.current?.click();
    setFiles((prev) => [...prev, { url: '', name: '', fileType: 'IMAGE' }]);
  };

  const handleFileClick = () => {
    fileRef.current?.click();
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (!files) return;

    const fileArray: File[] = Array.from(files);
    const newFiles = await Promise.all(
      fileArray.map(async (file) => ({
        url: URL.createObjectURL(file),
        name: file.name,
        fileType: 'IMAGE',
      }))
    );

    setFiles((prev) => [...prev, ...newFiles] as FileData[]);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (!files) return;

    // 파일이 하나인 경우
    if (files.length === 1) {
      const file = files[0];
      const newFile = {
        url: URL.createObjectURL(file),
        name: file.name,
        fileType: 'FILE',
      };
      setFiles([newFile] as FileData[]);
      return;
    }

    // 여러 파일인 경우
    const fileArray: File[] = Array.from(files);
    const newFiles = await Promise.all(
      fileArray.map(async (file) => ({
        url: URL.createObjectURL(file),
        name: file.name,
        fileType: 'FILE',
      }))
    );

    setFiles((prev) => [...prev, ...newFiles] as FileData[]);
  };

  const noticeWriteMutation = useNoticeWriteMutation();
  const submitWrite = () => {
    noticeWriteMutation.mutate(writeData, {
      onSuccess: () => {
        alert('공지사항 작성 완료');
      },
      onError: () => {
        alert('공지사항 작성 실패');
      },
    });
  };

  return {
    searchRef,
    searchSubmit,
    writeData,
    handleWriteDataChange,
    imageRef,
    handleImageClick,
    fileRef,
    handleFileClick,
    handleImageChange,
    handleFileChange,
    files,
    submitWrite,
  };
};
