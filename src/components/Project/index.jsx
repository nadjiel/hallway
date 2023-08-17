import { Card } from "../Card";

import { Container, Image, Title, Name, Type, About } from "./style";

import test from "../../assets/logo.svg";

export function Project({ image, name, type, description, src }) {
  return (
    <Card>
      <Container>
        <a href={ src } title={ `Go to the ${name} project` } target="_blank">
          <Image src={ /* image */ test } alt={ `The ${name} project` } />
          <Title>
            <Name>{ name }</Name>
            <Type>{ type }</Type>
          </Title>
          <About>{ description }</About>
        </a>
      </Container>
    </Card>
  )
}