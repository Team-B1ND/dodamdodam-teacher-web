import * as S from "./style";
import { Notice } from "types/Notice/notice.type";
import { ChevronLeft, Menu, DodamNoticeFile } from "@b1nd/dds-web";
import convertDateTime from "utils/Time/ConvertDateTime";
import Linkify from "react-linkify";
import dayjs from "dayjs";
import { useRecoilState } from "recoil";
import { MyMemberInfoId } from "stores/Member/member.store"; 
import { useNotice } from "hooks/Notice/useNotice";
import NoticeModal from "./NoticeModal";


interface NoticeDetailProps {
  notice: Notice | null;
  goBackToMain: () => void;
}

const NoticeDetail = ({ notice, goBackToMain }: NoticeDetailProps) => {
    const {...notices} = useNotice();
  if (!notice) return <div>공지사항이 없습니다.</div>;

  const [myMemberInfoId, ] = useRecoilState(MyMemberInfoId); 

  // 이미지 리스트 추출
  const images = notice.noticeFileRes
    ? notice.noticeFileRes.filter((file) => file.fileType === "IMAGE").map((file) => file.fileUrl)
    : [];

  // 파일 리스트 추출
  const files = notice.noticeFileRes
    ? notice.noticeFileRes.filter((file) => file.fileType === "FILE")
    : [];

  return (
    <>
    <S.NoticeDetailBox>
      <S.NoticeBackButton onClick={goBackToMain}>
        <ChevronLeft color="labelNormal"/>
        <span>공지</span>
      </S.NoticeBackButton>
      <S.NoticeHeader>
        <div>
            <span>{notice?.memberInfoRes?.name ?? "알 수 없음"}</span> ·{" "}
            <span>{convertDateTime.getDayOfWeek(dayjs(notice?.createdAt).toDate()) ?? "날짜 없음"}</span>
        </div>
        {notice?.memberInfoRes?.id === myMemberInfoId ?
        <div style={{cursor:"pointer"}} onClick={notices.detailModal}>
            <Menu color="labelNormal"/>
        </div>
        : ""}
      </S.NoticeHeader>
      <S.NoticeTitle>{notice?.title ?? "제목 없음"}</S.NoticeTitle>
      <S.NoticeContent>
        <Linkify
          componentDecorator={(decoratedHref: string, decoratedText: string, key: number) => (
            <a href={decoratedHref} key={key} target="_blank" rel="noopener noreferrer">
              {decoratedText}
            </a>
          )}
        >
          {notice?.content ?? "내용 없음"}
        </Linkify>
      </S.NoticeContent>

      {files.length > 0 && (
        <S.NoticeImagesFile>
          {files.map((file, idx) => (
            <DodamNoticeFile key={idx} 
            filename={file.fileName} 
            onClick={()=>console.log()}
            customStyle={{border:"1px solid #0083F0 ",gap:"5px"}}
            />
          ))}
        </S.NoticeImagesFile>
      )}

      {images.length > 0 && (
        <S.NoticeImagesFile>
          {images.map((image, idx) => (
            <S.ImageWrapper key={idx}>
              <img src={image} alt={`notice-img-${idx}`} />
            </S.ImageWrapper>
          ))}
        </S.NoticeImagesFile>
      )}


      
    </S.NoticeDetailBox>
      <NoticeModal 
        isOpen={notices.isNotice}
        onClose={notices.detailModal}
      />
    </>
  );
};

export default NoticeDetail;
