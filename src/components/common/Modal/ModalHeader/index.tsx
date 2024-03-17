import { CgClose } from "react-icons/cg";
import styled from "styled-components";

interface Props {
  title: string;
  icon?: string;
  alt?: string;
  close: () => void;
}

const ModalHeader = ({ title, icon, alt, close }: Props) => {
  return (
    <Container>
      <Wrap>
        {icon && <img src={icon} alt={alt} />}
        <span>{title}</span>
      </Wrap>
      <CloseIcon size={32} onClick={close} />
    </Container>
  );
};

export default ModalHeader;

const Container = styled.div`
  width: 100%;
  height: 53px;
  border-bottom: 1px solid #ddd;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrap = styled.div`
  font-size: 17px;
  font-weight: bold;

  display: flex;
  align-items: center;
  column-gap: 10px;

  img {
    width: 23px;
    height: 23px;
  }
`;

const CloseIcon = styled(CgClose)`
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;

  transform: scale(1);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ddd;
    transform: scale(0.96);
  }
  &:active {
    background-color: #eee;
  }
`;
