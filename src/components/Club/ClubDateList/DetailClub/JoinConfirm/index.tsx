import React, { useState, ChangeEvent, useContext } from "react";
import * as S from "./style";
import { DodamTextField, DodamFilledButton } from "@b1nd/dds-web";
interface JoinConfirmProps {
  onClose: () => void;
}

const JoinConfirm = ({ onClose }: JoinConfirmProps) => {
  const [rejectReason, setRejectReason] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRejectReason(event.target.value);
    console.log(rejectReason)
  };

  return (
    <S.ClubJoinContainer>
      <S.InputBoxContainer>
        <S.RejectReason>거절 사유를 입력해주세요.</S.RejectReason>
        <DodamTextField
          id="rejectReason"
          name="rejectReason"
          type="text"
          value={rejectReason}
          label="부적절한 개설 목적"
          width={273}
          onChange={handleChange}
          customStyle={{ marginTop: "20px" }}
        />
      </S.InputBoxContainer>
      <S.RejectButtonContainer>
        <DodamFilledButton
          size={"Large"}
          enabled={true}
          text="취소"
          typography={["Body1", "Medium"]}
          style={{ backgroundColor: "#F5F5F5" }}
          onClick={onClose} // 모달 닫기 기능 추가
        />
        <DodamFilledButton
          size={"Large"}
          enabled={true}
          text="확인"
          textTheme={"staticWhite"}
          typography={["Body1", "Medium"]}
          style={{ backgroundColor: "#0083F0", marginLeft: "8px" }}
        />
      </S.RejectButtonContainer>
    </S.ClubJoinContainer>
  );
};

export default JoinConfirm;