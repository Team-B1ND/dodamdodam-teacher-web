import { ButtonHTMLAttributes, ReactNode } from "react";
import { CSSObject } from "styled-components";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ButtonType: ButtonType;
  style?: CSSObject;
  children: string;
}

export interface ButtonWrapperProps {
  children: ReactNode;
  style?: CSSObject;
}

export type ButtonType =
  | "agree"
  | "agreed"
  | "disagree"
  | "disagreed"
  | "cancel";
