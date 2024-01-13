import * as S from "./style";

interface TextFieldProps {
  id: string;
  name: string;
  children: React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  functions?: (() => void) | string;
  type?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  children,
  onChange,
  id,
  name,
  type,
  functions,
  value,
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (typeof functions === "function") {
                functions();
              } else if (typeof functions === "string") {
                const elementId = functions;
                document.getElementById(elementId)?.focus();
              }
            }
          }}
          value={value}
        />

        <label>{children}</label>
      </S.TextFieldContainer>
    </>
  );
};
export default TextField;
