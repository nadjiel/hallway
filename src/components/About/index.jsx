import pic from "../../assets/nadjiel.jpeg";

import consts from "../../global/consts.json";

import { Title } from "../Title";

import { Container, Picture, Intro, Description, Paragraph } from "./style";

export function About() {
  return (
    <Container>
      <a href={ consts.user.src } title="Go to my Github page" target="_blank">
        <Picture src={ pic } alt="A picture of me." />
      </a>
      <Intro>
        <a name="about">
          <Title>Daniel de Oliveira</Title>
        </a>
        <Description>
          <Paragraph>
            Hello! 👋 I'm Daniel de Oliveira, a brazilian software developer who loves games and arts such as photography and music.
            I'm constantly looking for opportunities to learn and grow so I can offer the best with my work.
            This page is my portfolio, where you can read about me, my abilities and my projects, or even contact me.
          </Paragraph>
          <Paragraph>
            Feel free to look around and if you think I can help you with your project, or maybe you just wanna reach me out, my social media will be down on the footer, or you can send me an email via the contact section.
          </Paragraph>
        </Description>
      </Intro>
    </Container>
  );
}