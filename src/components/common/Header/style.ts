import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 80px;

  background: #0067bc;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 50;

  white-space: nowrap;
  padding: 1rem 2rem;
  color: #fff;
`;

export const HeaderMain = styled.div`
  width: 27%;
  display: flex;
  column-gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  font-weight: 700;
  cursor: pointer;

  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const HeaderLogoutContainer = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;

  p {
    font-size: 16px;
  }

  button {
    color: #fff;
    background-color: #0067bc;
    border: 1px solid;
    outline: none;
    font-size: 12px;
    padding: 2.5px 5px;
    cursor: pointer;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 22px;
`;

export const HeaderText = styled.p`
  font-size: 16px;
`;

export const DgswImage = styled.img`
  width: 80px;
  height: 64px;
`;
