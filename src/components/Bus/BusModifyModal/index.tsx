import { useState } from "react";
import * as S from "./style";
import { DodamModal, DodamTextField, DodamFilledButton } from "@b1nd/dds-web";
import { ChangeEvent } from "react";
import { useRecoilValue } from "recoil";
import { useModifyBusMutation } from "queries/Bus/bus.query";
import { SelectBusDataAtom } from "stores/Bus/bus.store";
import { BusUpdateParam } from "repositories/Bus/BusRepository";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "queries/queryKey";

interface BusModifyModalProps {
  isClose: () => void;
  isOpen: boolean;
}

const BusModifyModal = ({ isOpen, isClose }: BusModifyModalProps) => {
  const selectedBus = useRecoilValue(SelectBusDataAtom);
  const [name, setName] = useState("");
  const modifyBus = useModifyBusMutation();
  const busId = selectedBus.bus.id;
  const queryClient = useQueryClient();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const modifyBusFn = ({ busId, name }: BusUpdateParam) => {
    modifyBus.mutate(
      { busId, name },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("버스 이름 수정에 성공했습니다.");
          isClose();
          queryClient.invalidateQueries(QUERY_KEYS.bus.detail);
        },
        onError: () => {
          B1ndToast.showError("버스 수정 도중 오류가 발생했습니다.");
        },
      }
    );
  };
  return (
    <DodamModal isOpen={isOpen} $background={true}>
      <S.BusModalContainer>
        <p>변경할 이름을 입력해주세요</p>
        <DodamTextField
          id="modify"
          name="modify"
          type="text"
          value={name}
          label={selectedBus.bus.name}
          onChange={handleChange}
        />

        <div style={{ display: "flex", marginTop: "18px" }}>
          <DodamFilledButton
            size="Large"
            text="취소"
            customStyle={{ marginRight: "8px" }}
            backgroundColorType="Assistive"
            typography={["Body1", "Bold"]}
            onClick={() => isClose()}
          />
          <DodamFilledButton
            size="Large"
            text="확인"
            backgroundColorType="Primary"
            typography={["Body1", "Bold"]}
            textTheme="staticWhite"
            enabled={name.trim().length > 0}
            onClick={() => modifyBusFn({ busId, name })}
          />
        </div>
      </S.BusModalContainer>
    </DodamModal>
  );
};

export default BusModifyModal;
