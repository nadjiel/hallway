import styled from "styled-components";

import consts from "../../global/consts.json";

export const Container = styled.section`
  max-width: 77rem;
  margin: 1rem auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 1rem;
  text-align: center;
  
  @media (max-width: ${ consts.breakpoints.tablet }) {
    flex-direction: column;
  }
`;

export const Progress = styled.progress`
  height: .25rem;
  border-radius: 1rem;
  margin: 1rem;
  font-size: ${ consts.fontSizes.s };

  &::-webkit-progress-value {
    background-image: linear-gradient(to right, #2dc3e5, #bf4edd, #c87a35);
  }

  &::-moz-progress-bar {
    background-image: linear-gradient(to right, #2dc3e5, #bf4edd, #c87a35);
  }

  &::-ms-fill {
    background-image: linear-gradient(to right, #2dc3e5, #bf4edd, #c87a35);
  }
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