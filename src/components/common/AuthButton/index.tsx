import { AuthButtonContainer } from "./style";

interface AuthButtonProps {
  width: number;
  top: number;
  children: React.ReactNode;
  onClick?: () => void;
}

const AuthButton = ({ children, width, onClick, top }: AuthButtonProps) => {
  return (
    <>
      <AuthButtonContainer width={width} onClick={onClick} top={top}>
        {children}
      </AuthButtonContainer>
    </>
  );
};
export default AuthButton;
