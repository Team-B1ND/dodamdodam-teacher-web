import { FileType } from "types/common/file.type";

export interface NoticeRepository {
  createNotice(param: CreateNoticeParam): Promise<void>;
}

export interface CreateNoticeParam {
  title: string;
  content: string;
  files: FileType[];
}
