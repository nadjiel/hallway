import { Container, Section } from "./style";

import consts from "../../global/consts.json";

import { Title } from "../Title";
import { Project } from "../Project";

export function Projects() {
  return (
    <Container>
      <Title>My projects</Title>
      <Section>
        { consts.projects.map(project => <Project name={ project.name } type={ project.type } description={ project.description } src={ project.src } />) }
      </Section>
    </Container>
  )
}