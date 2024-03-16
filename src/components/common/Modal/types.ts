import { CSSObject } from "styled-components";

export interface ModalProps {
  width?: number;
  height?: number;
  zIndex?: number;
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
  customStyle?: CSSObject;
  title?: string;
}
