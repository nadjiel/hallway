import styled from "styled-components";

import consts from "../../global/consts.json";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem 1rem;
  
  @media (max-width: ${ consts.breakpoints.tablet }) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Picture = styled.img`
  max-width: 16rem;
  border-radius: 100%;
`;

export const Intro = styled.h2`
  max-width: 32rem;
  margin: 1rem;
`;

export const Description = styled.p`
  margin: 1rem;
  font-size: ${ consts.fontSizes.s };
`;

export const Paragraph = styled.p`
  margin-bottom: .5rem;
`;