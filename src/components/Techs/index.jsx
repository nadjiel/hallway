import { Container, Slider, Bubbler, Icon } from "./style";

import consts from "../../global/consts.json";

export function Techs() {
  return (
    <Container>
      <Slider>
        { consts.techs.map(tech => (
          <Bubbler>
            <a href={ tech.src } target="_blank" title={ `See more about the ${tech.name} technology` }>
              <Icon src={ tech.icon } alt={ `The ${tech.name} technology` } />
            </a>
          </Bubbler>
        )) }
      </Slider>
      <Slider>
      { consts.techs.map(tech => (
        <Bubbler>
          <a href={ tech.src } target="_blank" title={ `See more about the ${tech.name} technology` }>
            <Icon src={ tech.icon } alt={ `The ${tech} technology` } />
          </a>
        </Bubbler>
      )) }
      </Slider>
    </Container>
  )
}