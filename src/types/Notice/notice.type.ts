export interface Notice {
    id: number,
    title: string,
    content: string,
    fileUrl: string,
    fileType: string, //IMAGE, FILE
    readonly noticeStatus: "CREATED" | "DRAFT" | "DELETED", 
    memberInfoRes: {
        id: string,
        name: string,
        email: string,
        readonly role: "TEACHER" | "STUDENT",
        readonly status: "ACTIVE" | "DEACTIVATED",
        profileImage: string,
        phone: string,
        student: null,
        teacher: null,
        createdAt: string,
        modifiedAt: string
    },
    createdAt: string,
    modifiedAt: string
}

export interface NoticeResponse extends Notice{
    data:Notice[]
    nextLastId?: number;
}