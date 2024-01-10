import { AuthButtonType } from "../Button/types";
import { AuthButtonContainer } from "./style";

interface AuthButtonProps {
  width: number;
  children: React.ReactNode;
  AuthButtonType: AuthButtonType;
  top?: number;
  onClick?: () => void;
}

const AuthButton = ({
  children,
  width,
  onClick,
  top,
  AuthButtonType,
  ...props
}: AuthButtonProps) => {
  return (
    <>
      <AuthButtonContainer
        {...props}
        width={width}
        onClick={onClick}
        top={top}
        AuthButtonType={AuthButtonType}
      >
        {children}
      </AuthButtonContainer>
    </>
  );
};
export default AuthButton;
