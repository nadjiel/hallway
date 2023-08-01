import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border: 1px solid ${ ({ theme }) => theme.primary };
  border-radius: 1rem;
  background-color: ${ ({ theme }) => theme.primary + "40" };
  backdrop-filter: blur(5px);
`;