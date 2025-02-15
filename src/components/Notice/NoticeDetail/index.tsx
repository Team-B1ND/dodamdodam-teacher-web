import * as S from "./style";
import { Notice } from "types/Notice/notice.type";
import { ChevronLeft } from "@b1nd/dds-web";
import convertDateTime from "utils/Time/ConvertDateTime";
import Linkify from "react-linkify";
import dayjs from "dayjs";

interface NoticeDetailProps {
  notice: Notice | null;
  goBackToMain: () => void;
}

const NoticeDetail = ({ notice, goBackToMain }: NoticeDetailProps) => {

  return (
    <S.NoticeDetailBox>
        <S.NoticeBackButton onClick={goBackToMain}>
            <ChevronLeft />
            <span>공지</span>
        </S.NoticeBackButton>
        <S.NoticeHeader>
            <span>{notice?.memberInfoRes?.name ?? "알 수 없음"}</span> ·{" "}
            <span>{convertDateTime.getDayOfWeek(dayjs(notice?.createdAt).toDate()) ?? "날짜 없음"}</span>
        </S.NoticeHeader>
        <S.NoticeTitle>
        {notice?.title ?? "제목 없음"}
        </S.NoticeTitle>
        <S.NoticeContent>
            <Linkify
                componentDecorator={(
                decoratedHref: string,
                decoratedText: string,
                key: number
                ) => (
                <a href={decoratedHref} key={key} target="_blank" rel="noopener noreferrer">
                    {decoratedText}
                </a>
                )}
                >
                {notice?.content ?? "내용 없음"}
            </Linkify>
        </S.NoticeContent>
    </S.NoticeDetailBox>
  );
};

export default NoticeDetail;
