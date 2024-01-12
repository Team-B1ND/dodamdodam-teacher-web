import axios from "axios";
import { SignupParam, SignupRepository } from "./signup.repository";

class SignupRepositoryImpl implements SignupRepository {
  public async postSignup(param: SignupParam): Promise<void> {
    await axios.post(
      `${process.env.REACT_APP_DODAM_TEACHER_API}/auth/register`,
      param
    );
  }
}
export default new SignupRepositoryImpl();
