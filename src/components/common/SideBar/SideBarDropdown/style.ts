import styled from "styled-components";

export const SideBarDropdownContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
