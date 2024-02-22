import { ButtonContainer, ButtonWrapperBox } from "./style";
import { ButtonProps, ButtonWrapperProps } from "./types";

export const Button = ({
  ButtonType,
  style,
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer {...props} customStyle={style} ButtonType={ButtonType}>
      {children}
    </ButtonContainer>
  );
};

export const ButtonWrapper = ({ children, style }: ButtonWrapperProps) => {
  return <ButtonWrapperBox customStyle={style}>{children}</ButtonWrapperBox>;
};
