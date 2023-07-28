import styled from "styled-components";

import consts from "../../global/consts.json";

export const Container = styled.div`
  position: relative;
  max-width: 24rem;
  flex-grow: 1;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${ ({ theme }) => theme.primary };
  border-radius: 1rem;
  background-color: ${ ({ theme }) => theme.primary + "40" };
  backdrop-filter: blur(5px);
`;

export const Icon = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Info = styled.div`
  margin-right: 1.5rem;
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: ${ consts.fontSizes.m };
  font-weight: ${ consts.fontWeights.semibold };
`;

export const Description = styled.p`
  margin-bottom: 1rem;
  font-size: ${ consts.fontSizes.s };
`;

const levels = {
  1: "#2dc3e5",
  2: "#bf4edd",
  3: "#c87a35"
};

export const Level = styled.div`
  position: absolute;
  right: 1rem;

  svg {
    width: 1rem;
    height: 1rem;
    fill: ${ ({ level }) => levels[level] };
    fill: ${ ({ level }) => levels[level] };
    fill: ${ ({ level }) => levels[level] };
  }
`;