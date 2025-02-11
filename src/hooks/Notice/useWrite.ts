import { title } from 'process';
import React, { useCallback, useState } from 'react';
import { NoticeWriteData } from 'repositories/Notice/NoticeRepository';

const useWrite = () => {
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
    writeData,
    handleWriteDataChange,
  };
};

export default useWrite;
