import { useState } from "react";
import ClubMember from "./ClubMember";
import * as S from "./style";
import {
  DodamFilledButton,
  ExclamationmarkCircle,
  Close,
  DodamModal,
} from "@b1nd/dds-web";
import JoinConfirm from "./JoinConfirm";
import Member from "components/Member";


interface DetailClubProps {
  close: () => void;
}

const DetailClub = ({ close }: DetailClubProps) => {
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  console.log(close)

  return (
    <S.ClubModalContainer>
      <S.ClubMiddleContainer>
        <div>
          {/* Ensure onClick is directly on the Close component */}
          <div onClick={close}>
            <Close $svgStyle={{ cursor: "pointer" }} />
          </div>
          <S.ClubDescriptionWrap>
            <div>
              <S.ClubTypeName>자율 • 디자인</S.ClubTypeName>
              <S.ClubNameWrap>
                <div>InD</div>
                <ExclamationmarkCircle color={"#FBD300"} size={32} />
              </S.ClubNameWrap>
              <S.ClubShortDescription>
                디자인 자율동아리 인디입니다!
              </S.ClubShortDescription>
            </div>
            <S.ClubApprovalContainer>
              <S.WrapButton>
                <DodamFilledButton
                  size="Small"
                  width={97}
                  text="개설 승인"
                  textTheme={"staticWhite"}
                  typography={["Body2", "Medium"]}
                  customStyle={{ minHeight: "38px", marginLeft: "11px" }}
                />
                <DodamFilledButton
                  size="Small"
                  width={97}
                  text="개설 거절"
                  textTheme={"staticWhite"}
                  typography={["Body2", "Medium"]}
                  customStyle={{
                    minHeight: "38px",
                    marginLeft: "11px",
                    backgroundColor: "#FF4242",
                  }}
                  onClick={() => {
                    setIsRejectModalOpen(true);
                  }}
                />
                <DodamModal isOpen={isRejectModalOpen} background={true}>
                  <JoinConfirm />
                </DodamModal>
              </S.WrapButton>
              <S.ClubLeader>
                부장 : 1101신지윤
              </S.ClubLeader>
            </S.ClubApprovalContainer>
          </S.ClubDescriptionWrap>
          <S.BetweenLine />
          <S.ClubInfoDetail>
            <div>
              <S.Member>멤버</S.Member>
              <ClubMember />
            </div>

            <S.ExplainClubWrap>
              <div>설명</div>
              <S.ExplainClubBox>
                <div></div>
                {/* 마크다운 뷰어 <- 서버 연동시 추가 예정 */}
              </S.ExplainClubBox>
            </S.ExplainClubWrap>
          </S.ClubInfoDetail>
        </div>
      </S.ClubMiddleContainer>
    </S.ClubModalContainer>
  );
};

export default DetailClub;
