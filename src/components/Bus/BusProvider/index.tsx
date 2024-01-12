import { SectionHeader } from "@b1nd/b1nd-dodamdodam-ui";
import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  subTitle: string;
  children: ReactNode;
}

const BusProvider = ({ title, subTitle, children }: Props) => {
  return (
    <Container>
      <SectionHeader title={title} subTitle={subTitle} />
      <>{children}</>
    </Container>
  );
};

export default BusProvider;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2.5rem;
  white-space: nowrap;
`;
