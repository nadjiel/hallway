import styled from "styled-components";

import theme from "../../global/consts.json";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-top: 2rem;
  background-color: #2dc3e5;
  
  @media (max-width: ${ theme.breakpoints.tablet }) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;

export const Author = styled.span`
  font-size: ${ theme.fontSizes.xs };
`;

export const List = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const Item = styled.li`

`;

export const Link = styled.a`
  font-size: ${ theme.fontSizes.m };
`;

export const Icon = styled.div`
  width: 1em;
  height: 1em;

  &:hover {
    path {
      fill: ${ ({ theme }) => theme.background };
    }
  }
`;