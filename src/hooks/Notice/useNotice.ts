import { useCallback, useRef, useState } from 'react';
import { NoticeWriteData } from 'repositories/Notice/NoticeRepository';
export const useNotice = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const searchSubmit = () => {
    console.log('검색어 post');
  };

  const [writeData, setWriteData] = useState<NoticeWriteData>({
    title: '',
    content: '',
  });

  const handleWriteDataChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setWriteData((prev) => ({ ...prev, [name]: value }));
    },
    [setWriteData]
  );

  return {
    searchRef,
    searchSubmit,
    writeData,
    handleWriteDataChange,
  };
};