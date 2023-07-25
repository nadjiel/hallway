import styled from "styled-components";

import consts from "../../global/consts.json";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Logotype = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`;

export const Logomark = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Title = styled.h1`
  font-size: ${ consts.fontSizes.l };
  font-weight: ${ consts.fontWeights.bold };
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: ${ consts.breakpoints.tablet }) {
    display: none;
  }
`;

export const Item = styled.li`

`;

export const Link = styled.a`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -.25em;
    width: 0;
    height: .1em;
    background-color: ${ ({ theme }) => theme.primary };
    transition: width 250ms ease-out;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const ThemeToggler = styled.button`
  width: 2rem;
  height: 2rem;
  padding: .25rem;
  border-radius: 100%;
  transition: background-color 250ms ease-out;

  path {
    fill: ${ ({ theme }) => theme.primary };
    transition: fill 250ms ease-out;
  }

  &:hover {
    background-color: ${ ({ theme }) => theme.primary };

    path {
      fill: ${ ({ theme }) => theme.background };
    }
  }
`;