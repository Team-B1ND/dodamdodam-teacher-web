import * as S from "./style";

interface TextFieldProps {
  children: React.ReactNode;
}

const TextField: React.FC<TextFieldProps> = ({ children }) => {
  return (
    <>
      <S.TextFieldContainer>
        <S.TextFieldInput
          required
          style={{
            borderBottom: "1px solid  #a1a1a1",
          }}
        />

        <label>{children}</label>
      </S.TextFieldContainer>
    </>
  );
};
export default TextField;
