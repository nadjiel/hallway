import { Container, Author, List, Item, Link, Icon } from "./style";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

export function Footer() {
  return (
    <Container>
      <Author>© 2023 by Daniel de Oliveira</Author>
      <List>
        <Item><Link href="https://linkedin.com/in/nadjiel" target="_blank" title="My LinkedIn"><Icon><BsLinkedin style={ { width: "100%", height: "100%" } } /></Icon></Link></Item>
        <Item><Link href="https://github.com/nadjiel" target="_blank" title="My Github"><Icon><BsGithub style={ { width: "100%", height: "100%" } } /></Icon></Link></Item>
        <Item><Link href="https://instagram.com/nadjiel_acanaiou" target="_blank" title="My Instagram"><Icon><BsInstagram style={ { width: "100%", height: "100%" } } /></Icon></Link></Item>
      </List>
    </Container>
  );
}