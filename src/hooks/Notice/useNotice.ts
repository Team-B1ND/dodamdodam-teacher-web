import { useNoticeWriteMutation } from 'queries/Notice/notice.query';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { FileData, NoticeWriteData } from 'repositories/Notice/noticeRepository';
import { SelectCategoryListAtom,SelectCategoryAtom } from 'stores/Division/division.store';
import { Notice } from 'types/Notice/notice.type';


export const useNotice = () => {
  //detail과 main이동 hook  
  const [section, setSection] = useState<"main" | "detail">("main");
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const openDetail = (notice: Notice) => {
    setSelectedNotice(notice);
    setSection("detail");
  };

  const goBackToMain = () => {
    setSelectedNotice(null);
    setSection("main");
  };

  const searchRef = useRef<HTMLInputElement>(null);

  const selectCategory = useRecoilValue(SelectCategoryAtom);

  const navigate = useNavigate();
  const [files, setFiles] = useState<FileData[]>([]);

  const [writeData, setWriteData] = useState<NoticeWriteData>({
    title: '',
    content: '',
    files: files,
    divisions: [],
  });
  const selectedCategoryList = useRecoilValue(SelectCategoryListAtom);

  useEffect(() => {
    setWriteData({
      ...writeData,
      files: files,
      divisions: selectedCategoryList,
    });
  }, [files, selectedCategoryList]);

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
  };

  const handleFileClick = () => {
    fileRef.current?.click();
  };

  // local file url trnasformer
  const blobToBase64 = (blob: Blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as String);
      };
      reader.readAsDataURL(blob);
    });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (!files) return;

    const fileArray: File[] = Array.from(files);
    const newFiles = await Promise.all(
      fileArray.map(async (file) => ({
        url: await blobToBase64(file),
        name: file.name,
        fileType: 'IMAGE',
      }))
    );

    const formData = new FormData();
    formData.append('files', JSON.stringify(newFiles));

    setFiles((prev) => [...prev, ...newFiles] as FileData[]);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (!files) return;

    const fileArray: File[] = Array.from(files);
    const newFiles = await Promise.all(
      fileArray.map(async (file) => ({
        url: await blobToBase64(file),
        name: file.name,
        fileType: 'FILE',
      }))
    );

    const formData = new FormData();
    formData.append('files', JSON.stringify(newFiles));

    setFiles((prev) => [...prev, ...newFiles] as FileData[]);
  };

  const noticeWriteMutation = useNoticeWriteMutation();
  const submitWrite = () => {
    noticeWriteMutation.mutate(
      {
        title: writeData.title,
        content: writeData.content,
        files: files,
        divisions: selectedCategoryList,
      },
      {
        onSuccess: () => {
          alert('공지사항 작성 완료');
          navigate('/notice');
        },
        onError: () => {
          alert('공지사항 작성 실패');
        },
      }
    );
  };

  return {
    selectedNotice,
    section,
    selectCategory,
    searchRef,
    writeData,
    openDetail,
    goBackToMain,
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
