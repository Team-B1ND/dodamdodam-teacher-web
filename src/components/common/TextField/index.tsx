import * as S from "./style";

interface TextFieldProps {
  children: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  name?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  children,
  onChange,
  id,
  name,
}) => {
  return (
    <>
      <S.TextFieldContainer>
        <S.TextFieldInput
          required
          onChange={onChange}
          id={id}
          name={name}
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
