import { Container, Section } from "./style";

import consts from "../../global/consts.json";

import { Title } from "../Title";
import { Project } from "../Project";

export function Projects() {
  return (
    <Container>
      <a name="projects">
        <Title>My projects</Title>
      </a>
      <Section>
        { consts.projects.map(project => <Project name={ project.name } type={ project.type } description={ project.description } src={ project.src } />) }
      </Section>
    </Container>
  )
}