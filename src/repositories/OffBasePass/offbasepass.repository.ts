import {
  // OffBasePassType,
  OffBaseResponse,
} from "../../types/OffBasePass/offbasepass.type";

export interface OffBasePassRepository {
  getOffBasePass({ date }: { date: string }): Promise<OffBaseResponse>;
}

export interface OffBaseParam {
  date: string;
}
