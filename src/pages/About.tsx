import styled from "@emotion/styled";
import { useEffect } from "react";

const Group = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const H1 = styled.h1`
  font-size: 3em;
`;

const H2 = styled.h2`
  font-size: 2em;
`;

const DescriptionGroup = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const Description = styled.p`
  &:first-of-type {
    margin-top: 3em;
  }
`;

const Img = styled.img`
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }

  width: 50%;
  height: 50%;
`;

function About() {
  useEffect(() => {
    document.title = "About Me";
  }, []);

  return (
    <Group>
      <div>
        <div>
          <H1>Svirhshcuk Yaroslav</H1>
          <H2>Front-end Developer</H2>
        </div>
        <DescriptionGroup>
          <Description>
            Hi! I'm 21 years old Front-End developer from Ukraine. I graduated
            from KPI with a bachelor's degree in cybersecurity and am currently
            studying for a master's degree at DTEU.
          </Description>
          <Description>
            I chose Front-End development in my early years at university after
            I tried different programming languages, because I really like that
            in Front-End I can see immediate results from my changes in the
            code. I want to progress in the field of Front-End development and I
            am looking for job in this specialty. Work and difficulties do not
            scare me!
          </Description>
        </DescriptionGroup>
      </div>
      <Img src="/meme.jpg" alt="Frontend Meme" />
    </Group>
  );
}

export default About;
