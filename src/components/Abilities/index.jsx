import icon from "../../assets/logo.svg";

import { Title } from "../Title";
import { Ability } from "../Ability";

import { Container, Header, Progress, Section } from "./style";

export function Abilities() {
  return (
    <Container>
      <Header>
        <a name="abilities">
          <Title>What can I help you with?</Title>
        </a>
        <Progress value={ 100 } />
      </Header>
      <Section>
        <Ability icon={ icon } title="Ability" level={ 1 } description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        <Ability icon={ icon } title="Ability" level={ 2 } description="Lorem ipsum dolor sit amet" />
        <Ability icon={ icon } title="Ability" level={ 3 } description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nesciunt, expedita distinctio mollitia aspernatur ab eos minus laboriosam illo quae doloribus consequatur doloremque porro!" />
      </Section>
    </Container>
  )
}