import { useCallback, useState } from "react";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import PatternCheck from "../../utils/Check/PatternCheck";

import MemberRepositoryImpl from "repositories/Member/MemberRepositoryImpl";
import { MemberSignUpParam } from "repositories/Member/MemberRepository";

export const useSignup = () => {
  const [section, setSection] = useState("id");
  const [policy, setPolicy] = useState<boolean>(true);
  const [personalInfo, setPersonalInfo] = useState(true);

  const [signupData, setSignupData] = useState<MemberSignUpParam>({
    id: "",
    email: "",
    name: "",
    phone: "",
    position: "",
    pw: "",
    tel: "",
  });

  const signupTypeCheck = () => {
    const { id, pw, position, tel } = signupData;
    if (id === "" || pw === "" || position === "" || tel === "") {
      B1ndToast.showInfo("형식이 비었습니다");
      return;
    }

    if (!PatternCheck.idCheck(id)) {
      B1ndToast.showInfo(
        "ID : 알파벳과 숫자, 4글자 ~ 20글자 형식을 지켜주세요"
      );
      return;
    }

    if (!PatternCheck.pwCheck(pw)) {
      B1ndToast.showInfo(
        "비밀번호 : 알파벳과 숫자, 7글자 ~ 20글자 형식을 지켜주세요"
      );
      return;
    }

    if (!PatternCheck.positionCheck(position)) {
      B1ndToast.showInfo("직책 : 2글자 ~ 20글자 형식을 지켜주세요");
      return;
    }

    if (!PatternCheck.telCheck(tel)) {
      B1ndToast.showInfo("내선 번호 : 국번 포함 숫자만 사용");
      return;
    }

    setSection("email");
  };

  const handleSignupChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
    },
    [setSignupData]
  );

  const submitSignup = useCallback(async () => {
    const { id, pw, email, phone, position, name, tel } = signupData;

    if (email === "" || phone === "" || name === "") {
      B1ndToast.showInfo("형식이 비었습니다");
      return;
    }

    if (!PatternCheck.emailCheck(email)) {
      B1ndToast.showInfo(
        "E-mail : 이메일 형식, 10글자 ~ 30글자 형식을 지켜주세요"
      );
      return;
    }

    if (!PatternCheck.phoneCheck(phone)) {
      B1ndToast.showInfo("전화번호 : 숫자만 사용");
      return;
    }

    if (!PatternCheck.nameCheck(name)) {
      B1ndToast.showInfo("이름 : 2글자 ~ 10글자 형식을 지켜주세요");
      return;
    }

    if (policy) {
      B1ndToast.showInfo("운영정책에 동의해주세요");
      return;
    }

    if (personalInfo) {
      B1ndToast.showInfo("개인정보취급방침에 동의해주세요");
      return;
    }

    const validSignupData: MemberSignUpParam = {
      ...signupData,
      pw,
    };

    try {
      await MemberRepositoryImpl.postMemberJoinTeacher(validSignupData);
      window.alert("회원가입에 성공했습니다.(관리자 승인을 기다려주세요!)");
      window.location.reload();
    } catch (e) {
      B1ndToast.showError("회원가입에 실패했습니다.");
    }
  }, [signupData, policy, personalInfo]);
  return {
    section,
    setSection,
    handleSignupChange,
    submitSignup,
    signupTypeCheck,
    signupData,
    policy,
    setPersonalInfo,
    personalInfo,
    setPolicy,
  };
};
