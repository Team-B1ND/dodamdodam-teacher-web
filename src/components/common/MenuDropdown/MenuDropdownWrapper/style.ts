import styled from "styled-components";
import { palette } from "../../../../styles/palette";

export const MenuDropdownWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: 0.5s all ease-in-out;
  overflow: hidden;
`;

export const MenuDropdownWrapperTitleWrap = styled.div`
  width: 100%;
  height: 40px;
  padding: 0px 11px;
  background: none;
  transition: 0.5s all ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: black;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: ${palette.main};
    background-color: white;
  }
`;

export const MenuDropdownWrapperTitleIcon = styled.div<{ close: boolean }>`
  width: 13px;
  height: 13px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  transition: 0.5s all ease-in-out;

  transform: rotate(${({ close }) => (close ? "0deg" : "180deg")});
`;

export const MenuDropdownWrapperChildWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 5px;
  position: absolute;
  top: 45px;
  right: 0px;
`;
