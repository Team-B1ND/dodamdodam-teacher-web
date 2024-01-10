import AuthButton from "../../../common/AuthButton";
import TextField from "../../../common/TextField";
import { IoIosArrowForward } from "react-icons/io";
import { ButtonContainer } from "./style";
import { AccountContainer } from "../style";

const Id = () => {
  return (
    <div>
      <TextField>ID</TextField>
      <TextField>비밀번호</TextField>
      <TextField>직책 ex) 정보부장</TextField>
      <TextField>내선번호 ex) 0532310000</TextField>

      <ButtonContainer>
        <AuthButton width={125} top={55} AuthButtonType="agree">
          다음
          <IoIosArrowForward style={{ marginLeft: "10px", fontSize: "15px" }} />
        </AuthButton>
      </ButtonContainer>
      <AccountContainer>
        이미 계정이 있으신가요?<p>Sign In</p>
      </AccountContainer>
    </div>
  );
};

export default Id;
