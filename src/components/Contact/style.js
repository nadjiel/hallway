import styled from "styled-components";

import theme from "../../global/consts.json";

export const Container = styled.section`
  max-width: 77rem;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: ${ theme.fontSizes.s };
  width: 100%;
  max-width: 38.5rem;
  margin: .5rem auto .25rem;
`;

export const Input = styled.input`
  display: block;
  font-size: ${ theme.fontSizes.s };
  width: 100%;
  max-width: 38.5rem;
  padding: .5rem;
  border: 1px solid ${ ({ theme }) => theme.primary };
  border-radius: .5rem;
  margin: 0 auto .5rem;
`;

export const Textarea = styled.textarea`
  display: block;
  font-size: ${ theme.fontSizes.s };
  width: 100%;
  max-width: 38.5rem;
  padding: .5rem;
  border: 1px solid ${ ({ theme }) => theme.primary };
  border-radius: .5rem;
  margin: 0 auto .5rem;
  resize: none;
`;

export const Warning = styled.span`
  display: block;
  color: red;
  font-size: ${ theme.fontSizes.xs };
  text-align: center;
  margin: 1em;
`;

export const Button = styled.button`
  font-size: ${ theme.fontSizes.s };
  padding: .75rem;
  border-radius: 10px;
  margin: 1rem;
  background-color: #2dc3e5;

  &:hover {
    background-color: #bf4edd;
  }
`;

export const Popup = styled.span`
  display: block;
  font-size: ${ theme.fontSizes.xs };
  text-align: center;
  margin: 1em;

  color: ${ ({ status }) => status == "positive" && "green" };
  color: ${ ({ status }) => status == "negative" && "red" };
`;