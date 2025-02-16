export interface NoticeRepository {
  writeNotice: (data: NoticeWriteData) => Promise<void>;
  upload: (params: FormDataEntryValue) => Promise<{ data: { data: string } }>;
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
