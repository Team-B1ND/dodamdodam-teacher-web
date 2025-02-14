import { NoticeResponse } from "types/Notice/notice.type";

export interface NoticeRepository {
  writeNotice: (data: NoticeWriteData) => Promise<void>;
  getNotice: (pageParam: number, keyword?: string) => Promise<NoticeResponse>;
}

export interface NoticeWriteData {
  title: string;
  content: string;
  files?: FileData[];
  divisions: any[];
}

export interface FileData {
  url: string;
  name: string;
  fileType: 'IMAGE' | 'FILE';
}
