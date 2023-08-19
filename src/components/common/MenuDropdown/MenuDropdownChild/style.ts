import styled from "styled-components";
import { palette } from "../../../../styles/palette";

export const MenuDropdownChildContainer = styled.div`
  width: 168px;
  height: 36px;
  transition: 0.5s all ease-in-out;
  background: none;
  padding: 12px 8px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: black;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${palette.main};
    background-color: white;
  }
`;
