class PatternCheck {
  public idCheck(value: string): boolean {
    if (/^[a-zA-Z0-9]{5,20}$/.test(value)) {
      return true;
    }
    return false;
  }

  public pwCheck(value: string): boolean {
    if (/^[a-zA-Z0-9!@#$%^*+=-]{7,20}$/.test(value)) {
      return true;
    }
    return false;
  }

  public positionCheck(value: string): boolean {
    if (/^[0-9a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ\s]{2,20}$/.test(value)) {
      return true;
    }
    return false;
  }

  public telCheck(value: string): boolean {
    if (/^\d{2,3}\d{3,4}\d{3,4}$/.test(value)) {
      return true;
    }
    return false;
  }

  public emailCheck(value: string): boolean {
    if (
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
        value
      )
    ) {
      return true;
    }
    return false;
  }

  // public phoneCheck(value: string): boolean {
  //   if (/^\d{3}\d{4}\d{4}$/.test(value)) {
  //     return true;
  //   }
  //   return false;
  // }

  public nameCheck(value: string): boolean {
    if (/^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]{2,12}$/.test(value)) {
      return true;
    }
    return false;
  }
}

const patternCheck = new PatternCheck();
export default patternCheck;
