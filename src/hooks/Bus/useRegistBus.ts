import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useState } from "react";
import { useQueryClient } from "react-query";
import {
  useCreateBusMutation,
  useModifyBusMutation,
} from "../../queries/Bus/bus.query";
import { QUERY_KEYS } from "../../queries/queryKey";
import convertTime from "../../utils/Time/convertTime";
import { BusUpdateParam } from "../../repositories/Bus/BusRepository";
import { useRecoilValue } from "recoil";
import { ExistingBusDataAtom } from "../../stores/Bus/bus.store";

export const useRegistBus = () => {
  const existingBusData = useRecoilValue(ExistingBusDataAtom);
  const [busContent, setBusContent] = useState(
    existingBusData?.idx
      ? {
          busName: existingBusData?.busName,
          description: existingBusData?.description,
          peopleLimit: existingBusData?.peopleLimit,
          leaveTime: convertTime.parseDesiredDateTime(
            existingBusData?.leaveTime,
            "YYYY-MM-DD HH:mm"
          ),
          timeRequired: existingBusData?.timeRequired,
        }
      : {
          busName: "",
          description: "",
          peopleLimit: 0,
          leaveTime: convertTime.parseDesiredDateTime(
            new Date(),
            "YYYY-MM-DD HH:mm"
          ),
          timeRequired: "",
        }
  );
  const [timeRequired, setTimeRequired] = useState(
    existingBusData?.idx
      ? {
          hour: Number(existingBusData?.timeRequired.split(":")[0]),
          minute: Number(existingBusData?.timeRequired.split(":")[1]),
        }
      : {
          hour: 0,
          minute: 0,
        }
  );

  const queryClient = useQueryClient();
  const createBus = useCreateBusMutation();
  const modifyBus = useModifyBusMutation();

  // 버스인풋 onChange
  const handleBusContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "leaveTime") {
      setBusContent((prev) => ({
        ...prev,
        [name]: convertTime.parseDesiredDateTime(
          new Date(value),
          "YYYY-MM-DD HH:mm"
        ),
      }));
    } else if (name === "peopleLimit") {
      setBusContent((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
    } else if (name === "minute" || name === "hour") {
      setTimeRequired((prev) => ({ ...prev, [name]: value }));
    } else {
      setBusContent((prev) => ({ ...prev, [name]: value }));
    }
  };

  const checkAndFilterBusEssentialInfo = () => {
    if (busContent.busName?.trim() === "") {
      B1ndToast.showInfo("버스 이름을 입력해 주세요!");
      return false;
    }

    if (busContent.description?.trim() === "") {
      B1ndToast.showInfo("버스 설명을 입력해 주세요!");
      return false;
    }

    if (busContent.leaveTime === "Invalid Date") {
      B1ndToast.showInfo("버스 출발시간을 입력해 주세요!");
      return false;
    }

    if (new Date(busContent.leaveTime!) < new Date()) {
      B1ndToast.showInfo("현재시간 이후로 입력해 주세요!");
      return false;
    }

    if (Number(busContent.peopleLimit) < 0) {
      B1ndToast.showInfo("버스 인원 제한 수를 입력해 주세요!");
      return false;
    }

    // 소요시간 시간과 분이 둘다 0 이하일 떄
    if (timeRequired.hour <= 0 && timeRequired.minute <= 0) {
      B1ndToast.showInfo("소요시간이 올바르지 않습니다!");
      return false;
    }

    // 소요시간 시간이 0 ~ 23 외의 값을 넣을 때
    if (timeRequired.hour > 23 || timeRequired.hour < 0) {
      B1ndToast.showInfo("0 ~ 23시간 사이로 입력해 주세요!");
      return false;
    }

    // 소요시간 분이 0 ~ 59 외의 값을 넣을 때
    if (timeRequired.minute < 0 || timeRequired.minute > 59) {
      B1ndToast.showInfo("0 ~ 59분 사이로 입력해 주세요!");
      return false;
    }

    // 소요시간 시간 또는 분이 숫자가 아닐 때
    if (
      !isNaN(timeRequired.hour) === false ||
      !isNaN(timeRequired.minute) === false
    ) {
      B1ndToast.showInfo("숫자 형식이 아닙니다!");
      return false;
    }

    return true;
  };

  const formatTimeRequired = () => {
    let formatTime: string = "";

    if (timeRequired.hour < 10) {
      formatTime = `0${timeRequired.hour}`;
    } else {
      formatTime = `${timeRequired.hour}`;
    }

    if (timeRequired.minute < 10) {
      formatTime += `:0${timeRequired.minute}`;
    } else {
      formatTime += `:${timeRequired.minute}`;
    }

    return formatTime;
  };

  // 버스 등록 및 수정
  const handleBusContentBusSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    closeBusRegister: () => void
  ) => {
    e.preventDefault();

    if (checkAndFilterBusEssentialInfo()) {
      let timeRequired = formatTimeRequired();

      // existingBusData?.idx가 true이면 버스수정 아니면 버스등록
      if (existingBusData?.idx) {
        // 기존값과 수정값 비교
        if (
          JSON.stringify({
            busName: existingBusData?.busName,
            description: existingBusData?.description,
            peopleLimit: existingBusData?.peopleLimit,
            leaveTime: convertTime.parseDesiredDateTime(
              existingBusData?.leaveTime,
              "YYYY-MM-DD HH:mm"
            ),
            timeRequired: existingBusData?.timeRequired,
          }) ===
          JSON.stringify({
            ...busContent,
            timeRequired: timeRequired + ":00",
          })
        ) {
          return B1ndToast.showInfo("버스 정보를 수정해주세요!");
        }

        modifyBus.mutate(
          {
            ...busContent,
            busIdx: existingBusData?.idx,
            timeRequired,
          } as BusUpdateParam,
          {
            onSuccess: () => {
              B1ndToast.showSuccess("버스 정보를 수정하였습니다!");
              queryClient.invalidateQueries(QUERY_KEYS.bus.registeredBus);
              closeBusRegister();
            },
            onError: () => {
              B1ndToast.showError("버스 정보를 수정하지 못했습니다!");
            },
          }
        );
      } else {
        createBus.mutate(
          {
            ...busContent,
            timeRequired,
          } as BusUpdateParam,
          {
            onSuccess: () => {
              B1ndToast.showSuccess("버스를 추가하였습니다!");
              queryClient.invalidateQueries(QUERY_KEYS.bus.registeredBus);
              closeBusRegister();
            },
            onError: () => {
              B1ndToast.showError("버스를 추가하지 못했습니다!");
            },
          }
        );
      }
    }
  };

  return {
    busContent,
    timeRequired,
    handleBusContentChange,
    handleBusContentBusSubmit,
  };
};
