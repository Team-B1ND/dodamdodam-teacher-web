export interface NoticeRepository {
  writeNotice: (data: NoticeWriteData) => Promise<void>;
}

export interface NoticeWriteData {
  title: string;
  content: string;
  files?: FileData[];
  divisions: number[];
}

export interface FileData {
  url: string;
  name: string;
  fileType?: 'IMAGE' | 'FILE ';
}
