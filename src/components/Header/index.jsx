import { SlOptionsVertical } from "react-icons/sl";

import logo from "../../assets/logo.svg";

import { Container, Logotype, Logomark, Title, Nav, Menu, Item, Link, Options } from "./style";

export function Header() {
  return (
    <Container>
      <Logotype>
        <Logomark src={ logo } alt="Page logo" />
        <Title>Nadjiel</Title>
      </Logotype>
      <Nav>
        <Menu>
          <Item><Link href="#about" title="Read about me!">About</Link></Item>
          <Item><Link href="#abilities" title="See my abilities!">Abilities</Link></Item>
          <Item><Link href="#projects" title="See my projects!">Projects</Link></Item>
          <Item><Link href="#contact" title="Contact me!">Contact</Link></Item>
        </Menu>
        
        <Options>
          <SlOptionsVertical style={ { width: "100%", height: "100%" } } />
        </Options>
      </Nav>
    </Container>
  )
}