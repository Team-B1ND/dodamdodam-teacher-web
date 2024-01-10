import { Dispatch, SetStateAction } from "react";
import * as S from "./style";
import { IoCheckmarkSharp } from "react-icons/io5";

interface CheckBoxProps {
  children: React.ReactNode;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const CheckBox = ({ children, isChecked, setIsChecked }: CheckBoxProps) => {
  const CheckBoxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <label>
        <input
          type="checkbox"
          style={{ display: "none" }}
          onChange={CheckBoxChange}
        />
        {isChecked ? (
          <S.CheckBoxContainer>
            <S.CheckBox isChecked={isChecked}></S.CheckBox>
            <S.CheckSpan isChecked={isChecked}>{children}</S.CheckSpan>
          </S.CheckBoxContainer>
        ) : (
          <S.CheckBoxContainer>
            <S.CheckBox isChecked={isChecked}>
              <IoCheckmarkSharp />
            </S.CheckBox>
            <S.CheckSpan isChecked={isChecked}>{children}</S.CheckSpan>
          </S.CheckBoxContainer>
        )}
      </label>
    </>
  );
};

export default CheckBox;
