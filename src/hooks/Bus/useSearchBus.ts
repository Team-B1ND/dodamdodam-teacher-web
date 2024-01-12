import { BusResponse } from "../../types/Bus/Bus.type";

export const useSearchBus = () => {
  const searchByBusName = (busData: BusResponse, busName: string) => {
    return busData?.data.busList.map((bus) => ({
      ...bus,
      bus: bus.bus.filter((item) => item.busName.includes(busName)),
    }));
  };

  return {
    searchByBusName,
  };
};
