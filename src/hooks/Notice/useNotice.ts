import { B1ndToast } from '@b1nd/b1nd-toastify';
import { useFileUploadMutation, useNoticeWriteMutation } from 'queries/Notice/notice.query';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { FileData, NoticeWriteData } from 'repositories/Notice/NoticeRepository';
import { SelectCategoryListAtom } from 'stores/Division/division.store';

export const useNotice = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const searchSubmit = () => {
    console.log('검색어 post');
  };

  const navigate = useNavigate();
  const [files, setFiles] = useState<FileData[]>([]);
  const [image, setImage] = useState<string[]>([]);
  const [imageLink, setImageLink] = useState<string>('');

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
    const fileUrls: string[] = [];

    for (let i = 0; i < fileArray.length; i++) {
      const currentFile = fileArray[i];
      const imageUrl = URL.createObjectURL(currentFile);
      fileUrls.push(imageUrl);
    }

    setImage((prev) => [...prev, ...fileUrls]);

    const formData = new FormData();
    fileArray.forEach((file) => {
      formData.append('files', file);
    });

    const fileUploadMutation = useFileUploadMutation();
    fileUploadMutation.mutate(formData.get('files')!, {
      onSuccess: (data) => {
        setImageLink(data.data.data);
      },
      onError: () => {
        B1ndToast.showError('이미지 업로드 실패!');
      },
    });
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
