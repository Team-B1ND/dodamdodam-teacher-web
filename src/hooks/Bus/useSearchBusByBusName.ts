import { BusResponse } from "../../types/Bus/bus.type";

export const useSearchBusByBusName = () => {
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
