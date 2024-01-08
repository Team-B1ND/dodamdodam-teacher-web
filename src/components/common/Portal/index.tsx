import { ReactNode } from "react";
import ReactDom from "react-dom";

export const Portal = ({ children }: { children: ReactNode }) => {
  const element = document.getElementById("modal") as HTMLElement;
  return ReactDom.createPortal(children, element);
};
