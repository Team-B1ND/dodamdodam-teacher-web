import * as S from "./style";

interface TextFieldProps {
  id: string;
  name: string;
  children: React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  children,
  onChange,
  id,
  name,
  type,
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
          type={type}
        />

        <label>{children}</label>
      </S.TextFieldContainer>
    </>
  );
};
export default TextField;
