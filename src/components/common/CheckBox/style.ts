import styled from "styled-components";

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;
`;

export const CheckBox = styled.div<{ isChecked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.isChecked ? "#ccc" : "rgba(0, 103, 188, 0.8)")};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  transition: color 0.1s ease-in, border-color 0.1s ease-in;
  border: ${(props) =>
    props.isChecked
      ? "0.1rem solid #ccc"
      : "0.1rem solid rgba(0, 103, 188, 0.8)"};
`;

export const CheckSpan = styled.span<{ isChecked: boolean }>`
  transition: color 0.1s ease-in, border-color 0.1s ease-in;
  color: ${(props) => (props.isChecked ? "#ccc" : "rgba(0, 103, 188, 0.8)")};

  font-size: 17px;
`;
