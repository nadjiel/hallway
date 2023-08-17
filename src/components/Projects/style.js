import styled from "styled-components";

export const Container = styled.section`
  max-width: 77rem;
  margin: 0 auto;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 1rem;

  & > * {
    flex-basis: 24rem;
  }
`;