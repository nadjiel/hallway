import { BsCircleFill } from "react-icons/bs";

import { Container, Icon, Info, Title, Description, Level } from "./style";

export function Ability({ icon, title, description, level }) {
  return (
    <Container>
      <Icon src={ icon } alt={ `The ${ title } ability` } title={ `The ${ title } ability` } />
      <Info>
        <Title>{ title }</Title>
        <Description>
          { description }
        </Description>
      </Info>
      <Level level={ level }>
        <BsCircleFill />
      </Level>
    </Container>
  )
}