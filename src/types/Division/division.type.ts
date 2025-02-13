export interface DivisionResponse extends Response {
  data: DivisionType[];
}

export interface DivisionType {
  id: number;
  name: string;
  isAtv?: boolean;
}
