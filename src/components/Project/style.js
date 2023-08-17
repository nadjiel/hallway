import styled from "styled-components";

import consts from "../../global/consts.json";

export const Container = styled.div`

`;

export const Image = styled.img`

`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: .25rem;
`;

export const Name = styled.h3`
  font-size: ${ consts.fontSizes.m };
  font-weight: ${ consts.fontWeights.bold };
`;

export const Type = styled.h3`
  font-size: ${ consts.fontSizes.m };
  font-style: italic;
`;

export const About = styled.p`
  font-size: ${ consts.fontSizes.s };
`;