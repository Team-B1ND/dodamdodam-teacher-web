import { useState } from "react";
import ClubMemberItem from "./ClubMemberItem";
import * as S from "./style";
import {
  DodamFilledButton,
  ExclamationmarkCircle,
  Close,
  DodamModal,
  CheckmarkCircleFilled,
} from "@b1nd/dds-web";
import JoinConfirm from "./JoinConfirm";
import useFetchClub from "hooks/Club/useFetchClub";
import useMemberLeader from "hooks/Club/useMemberLeader";
import MDEditor from "@uiw/react-md-editor";
import useMembers from "hooks/Club/useMembers";
import ClubItem from "components/Club/ClubMain/ClubContext/ClubItemList/ClubItem";

interface DetailClubProps {
  close: () => void;
}

const DetailClub = (props: { item: number; close: boolean }) => {
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const { club } = useFetchClub(props.item);
  const { memberLeader } = useMemberLeader(props.item);
  const { members } = useMembers(props.item);

  return (
    <S.ClubModalContainer>
      <S.ClubMiddleContainer>
        <div>
          <div onClick={close}>
            <Close $svgStyle={{ cursor: "pointer" }} />
          </div>
          <S.ClubDescriptionWrap>
            <div>
              <S.ClubTypeName>
                {club?.type == "CREATIVE_ACTIVITY_CLUB" ? "창체 • " : "자율 • "}
                {club?.subject}
              </S.ClubTypeName>
              <S.ClubNameWrap>
                <S.ClubName>{club?.name}</S.ClubName>
                {club?.state === "ALLOWED" ? (
                  <CheckmarkCircleFilled color="#00C265" size={32} />
                ) : (
                  <ExclamationmarkCircle color={"#FBD300"} size={32} />
                )}
              </S.ClubNameWrap>
              <S.ClubShortDescription>
                {club?.shortDescription}
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
                    setIsRejectModalOpen(false);
                  }}
                />
                <DodamModal isOpen={isRejectModalOpen} background={true}>
                  <JoinConfirm />
                </DodamModal>
              </S.WrapButton>
              <S.ClubLeader>
                부장 : {memberLeader?.grade}
                {memberLeader?.room}
                {(memberLeader?.number as number) < 10
                  ? "0" + memberLeader?.number
                  : memberLeader?.number}{" "}
                {memberLeader?.name}
              </S.ClubLeader>
            </S.ClubApprovalContainer>
          </S.ClubDescriptionWrap>
          <S.BetweenLine />
          <S.ClubInfoDetail>
            <div>
              <S.Member>멤버</S.Member>
              {members.map((member)=>(<ClubMemberItem name={member.name} room={member.room} number={member.number}></ClubMemberItem>))}
              <ClubMemberItem name="김하나" room={2} number={3}></ClubMemberItem>
            </div>
            <S.ExplainClubWrap>
              <div>설명</div>
              <S.ExplainClubBox>
                <S.MarkDownWrapBox>
                  <MDEditor.Markdown
                    source={club?.description}
                    style={{ backgroundColor: "#fff", color: "#000" }}
                  />
                </S.MarkDownWrapBox>
              </S.ExplainClubBox>
            </S.ExplainClubWrap>
          </S.ClubInfoDetail>
        </div>
      </S.ClubMiddleContainer>
    </S.ClubModalContainer>
  );
};

export default DetailClub;