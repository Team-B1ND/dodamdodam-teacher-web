export interface NoticeSidebarType {
  title: string
  isWrite: boolean
}

export interface PageDataType {
  text: string
  isAtv: boolean
}

export interface NoticeFile {
  fileUrl: string
  fileName: string
  fileType: 'IMAGE' | 'FILE'
}

export interface Notice {
  id: number
  title: string
  content: string
  readonly noticeStatus: 'CREATED' | 'DRAFT' | 'DELETED'
  noticeFileRes: NoticeFile[]
  memberInfoRes: {
    id: string
    name: string
    email: string
    readonly role: 'TEACHER' | 'STUDENT'
    readonly status: 'ACTIVE' | 'DEACTIVATED'
    profileImage: string
    phone: string
    student: null
    teacher: null
    createdAt: string
    modifiedAt: string
  }
  createdAt: string
  modifiedAt: string
}

export interface NoticeResponse extends Notice {
  data: Notice[]
  nextLastId?: number | null
}
