import { useCallback, useState } from 'react';
import { B1ndToast } from '@b1nd/b1nd-toastify';
import PatternCheck from 'utils/Check/PatternCheck';

import MemberRepositoryImpl from 'repositories/Member/MemberRepositoryImpl';
import { MemberSignUpParam } from 'repositories/Member/MemberRepository';

export const useSignup = () => {
  const [section, setSection] = useState('SignupFirst');
  const [policy, setPolicy] = useState<boolean>(false);
  const [personalInfo, setPersonalInfo] = useState(false);

  const [signupData, setSignupData] = useState<MemberSignUpParam>({
    id: '',
    email: '',
    name: '',
    phone: '',
    position: '',
    pw: '',
    checkPw: '',
    tel: '',
  });
  const [pwCheck, setPwCheck] = useState<string>('');

  const [error, setError] = useState<MemberSignUpParam>({
    id: '',
    email: '',
    name: '',
    phone: '',
    position: '',
    pw: '',
    checkPw: '',
    tel: '',
  });

  const signupTypeCheck = () => {
    const { email, position, tel, name } = signupData;
    if (email === '' || position === '' || tel === '' || name === '') {
      B1ndToast.showInfo('형식이 비었습니다');
      setError({
        ...error,
        email: '형식이 비었습니다',
        position: '형식이 비었습니다',
        tel: '형식이 비었습니다',
        name: '형식이 비었습니다',
      });
      return;
    }

    if (!PatternCheck.emailCheck(email)) {
      B1ndToast.showInfo('E-mail : 이메일 형식, 10글자 ~ 30글자 형식을 지켜주세요');
      setError({
        ...error,
        email: '이메일 형식, 10글자 ~ 30글자 형식을 지켜주세요',
      });
      return;
    }

    if (!PatternCheck.positionCheck(position)) {
      B1ndToast.showInfo('직책 : 2글자 ~ 20글자 형식을 지켜주세요');
      setError({
        ...error,
        position: '2글자 ~ 20글자 형식을 지켜주세요',
      });
      return;
    }

    if (!PatternCheck.phoneCheck(tel)) {
      B1ndToast.showInfo('전화번호 : 숫자만 사용');
      setError({
        ...error,
        phone: '숫자만 사용',
      });
      return;
    }

    if (signupData.pw !== pwCheck) {
      B1ndToast.showInfo('비밀번호가 일치하지 않습니다.');
      setError({
        ...error,
        pw: '비밀번호가 일치하지 않습니다.',
      });
      return;
    }

    if (!PatternCheck.nameCheck(name)) {
      B1ndToast.showInfo('이름 : 2글자 ~ 10글자 형식을 지켜주세요');
      setError({
        ...error,
        name: '2글자 ~ 10글자 형식을 지켜주세요',
      });
      return;
    }

    setSection('SignupSecond');
  };

  const handleSignupChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
    },
    [setSignupData]
  );

  const submitSignup = useCallback(async () => {
    const { id, pw, checkPw } = signupData;

    if (id === '' || pw === '') {
      B1ndToast.showInfo('형식이 비었습니다');
      return;
    }

    if (!PatternCheck.idCheck(id)) {
      B1ndToast.showInfo('ID : 알파벳과 숫자, 4글자 ~ 20글자 형식을 지켜주세요');
      return;
    }

    if (!PatternCheck.pwCheck(pw)) {
      B1ndToast.showInfo('비밀번호 : 알파벳과 숫자, 7글자 ~ 20글자 형식을 지켜주세요');
      return;
    }

    if (pw !== checkPw) {
      B1ndToast.showInfo('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!policy) {
      B1ndToast.showInfo('운영정책에 동의해주세요');
      return;
    }

    if (!personalInfo) {
      B1ndToast.showInfo('개인정보취급방침에 동의해주세요');
      return;
    }

    const validSignupData: Omit<MemberSignUpParam, "checkPw"> = {
      id,
      email: signupData.email,
      name: signupData.name,
      phone: signupData.phone,
      position: signupData.position,
      pw,
      tel: signupData.tel,
    };

    try {
      await MemberRepositoryImpl.postMemberJoinTeacher(validSignupData);
      window.alert('회원가입에 성공했습니다.(관리자 승인을 기다려주세요!)');
      window.location.reload();
    } catch (e) {
      B1ndToast.showError('회원가입에 실패했습니다.');
    }
  }, [signupData, policy, personalInfo]);

  const checkAllRequired = useCallback(() => {
    setPolicy((prev) => !prev);
    setPersonalInfo((prev) => !prev);
  }, []);

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
    error,
    checkAllRequired,
    setPwCheck,
    pwCheck,
  };
};
