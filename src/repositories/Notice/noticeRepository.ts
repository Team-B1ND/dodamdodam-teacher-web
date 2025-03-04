import { NoticeResponse } from 'types/Notice/notice.type'

export interface NoticeRepository {
  writeNotice: (data: NoticeWriteData) => Promise<void>
  getNotice: (pageParam: number, keyword?: string) => Promise<NoticeResponse>
  getDivisionNotice: (
    pageParam: number,
    selectCategory?: number
  ) => Promise<NoticeResponse>
  upload: (params: FormDataEntryValue) => Promise<{ data: string }>
  delete: (id: string) => Promise<void>
}

export interface NoticeWriteData {
  title: string
  content: string
  files: FileData[]
  divisions: number[]
}

export interface FileData {
  url: string
  name: string
  fileType?: 'IMAGE' | 'FILE '
}
