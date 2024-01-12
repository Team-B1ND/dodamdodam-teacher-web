export interface SignupRepository {
  postSignup(param: SignupParam): Promise<void>;
}

export interface SignupParam {
  id: string;
  email: string;
  name: string;
  phone: string;
  pw: string;
  position: string;
  tel: string;
}
