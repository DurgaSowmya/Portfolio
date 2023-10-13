import React from "react";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";

import {
  ShowcaseImagecard,
  ShowcaseParticleContainer,
  Particle,
} from "../styles/Showcase.styled";

import { BsGithub, BsLinkedin } from "react-icons/bs";

import ShowcaseImg from "../assets/showcase-img.png";
import BackgroundImg from "../assets/particle.png";

const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%">
      <FlexContainer fullWidthChild>
        <div>
          <Heading as="h4" size="h4">
            Hello!
          </Heading>

          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            I'm <BlueText>Durga Sowmya</BlueText>
          </Heading>

          <Heading as="h3" size="h3">
            I'm a <BlueText> Full Stack Developer </BlueText>
          </Heading>

          <ParaText as="p" top="2rem" bottom="4rem">
            Hello, My Name is Durga Sowmya and I'm a Computer Science Student
            and a Full Stack Developer. I am passionate in editing , developing
            and creating user-friendly websites
          </ParaText>

          <FlexContainer gap="20px">
            <IconContainer>
              <a href="https://www.linkedin.com/in/sowmya-kollipara-383772240/">
                <BsLinkedin color="white" size={30} />
              </a>
            </IconContainer>
            <IconContainer>
              <a href="https://github.com/DurgaSowmya">
                <BsGithub color="white" size={30} />
              </a>
            </IconContainer>
          </FlexContainer>
        </div>

        <FlexContainer justify="flex-end">
          <ShowcaseParticleContainer>
            <ShowcaseImagecard>
              <img src={ShowcaseImg} alt="showcase" />
            </ShowcaseImagecard>

            <Particle
              src={BackgroundImg}
              alt="particle"
              top="-80px"
              left="20px"
              rotate="60deg"
            />

            <Particle
              src={BackgroundImg}
              alt="particle"
              top="50px"
              right="-70px"
              rotate="0deg"
            />

            <Particle
              src={BackgroundImg}
              alt="particle"
              bottom="10px"
              left="-70px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
