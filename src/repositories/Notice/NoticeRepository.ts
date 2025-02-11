export interface NoticeRepository {
  writeNotice: (data: NoticeWriteData) => Promise<void>;
}

export interface NoticeWriteData {
  title: string;
  content: string;
  image?: FormDataEntryValue;
  file?: FormDataEntryValue;
}
