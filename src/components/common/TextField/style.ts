import styled from "styled-components";

export const TextFieldContainer = styled.div`
  width: 334px;

  padding: 40px 0px 0px 4px;

  position: relative;

  label {
    position: absolute;

    left: 4px;
    top: 80%;

    font-size: 18px;
    font-weight: 500;

    transform: translateY(-90%);
    transition: all 0.2s ease;

    pointer-events: none;

    color: #979ba0;
  }

  input:is(:focus, :valid) ~ label {
    font-size: 12px;

    transform: translateY(-300%);
    color: #0f69f5;
  }
`;
export const TextFieldInput = styled.input`
  width: 334px;
  height: 45px;

  border: 0;
  outline: 0;

  font-size: 18px;
  font-weight: 400;

  color: #1b1c1d;

  &:focus {
    border: none;
    border-bottom: 1px solid #0f69f5;
  }
`;
