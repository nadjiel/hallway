import styled, { keyframes } from "styled-components";

import consts from "../../global/consts.json";

const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const bubble = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const Container = styled.section`
  position: relative;
  display: flex;
  max-width: ${ consts.techs.length / 2 * 114 }px;
  padding-block: 1rem;
  margin-inline: auto;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 15%;
    height: 100%;
    background-image: linear-gradient(to right, ${ ({ theme }) => theme.background } 20%, ${ ({ theme }) => theme.background + "00" });
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 15%;
    height: 100%;
    background-image: linear-gradient(to left, ${ ({ theme }) => theme.background } 20%, ${ ({ theme }) => theme.background + "00" });
  }
`;

export const Slider = styled.div`
  display: flex;
  gap: 2rem;
  padding-right: 2rem;
  animation: ${ slide } 24s linear infinite;
`;

export const Bubbler = styled.div`
  height: calc(50px * 2);

  img {
    animation: ${ bubble } 2s cubic-bezier(.65,.05,.36,1) infinite alternate;
  }

  &:nth-child(even) {
    img {
      animation: ${ bubble } 2s cubic-bezier(.65,.05,.36,1) infinite alternate-reverse;
    }
  }
`;

export const Icon = styled.img`
  box-sizing: content-box;
  display: block;
  width: 2rem;
  padding: .5rem;
  border: 1px solid ${ ({ theme }) => theme.primary };
  /* total width: 2rem + .5rem * 2 + 1px * 2 = 50px */
  border-radius: 100%;
`;