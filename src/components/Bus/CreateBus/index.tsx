import { useState } from "react";
import * as S from "./style";
import { DodamFilledTextField, DodamFilledButton } from "@b1nd/dds-web";
import { ChangeEvent } from "react";
import { useCreateBusMutation } from "queries/Bus/bus.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { QUERY_KEYS } from "queries/queryKey";
import { useQueryClient } from "react-query";

const CreateBus = () => {
  const [busName, setBusName] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBusName(event.target.value);
  };

  const createBus = useCreateBusMutation();
  const queryClient = useQueryClient();

  const createBusFn = (busName : string) =>{
    createBus.mutate(busName, {
        onSuccess: ()=>{
            queryClient.invalidateQueries(QUERY_KEYS.bus.busDate);
            B1ndToast.showSuccess(`버스가 추가되었습니다.`);
            setBusName("");
        },
        onError : () =>{
            B1ndToast.showError('버스 승인에 실패했습니다.')
        }
    })

  }
  return (
    <S.CreateBusBox>
      <div style={{marginBottom: "10px"}}>버스 생성</div>
      <DodamFilledTextField
        type="text"
        label="버스명"
        placeholder="생성할 버스명 입력"
        onChange={handleChange}
        value={busName}
      />

      <div style={{ display: "flex", justifyContent: "end", width: "100%" }}>
        <DodamFilledButton
          text="생성"
          backgroundColorType="Primary"
          size="Medium"
          width={88}
          textTheme={"staticWhite"}
          typography={["Body2", "Medium"]}
          onClick={() => createBusFn(busName)}
          attendants="left"
          customStyle={{ marginTop: "10px" }}
        />
      </div>
    </S.CreateBusBox>
  );
};

export default CreateBus;
