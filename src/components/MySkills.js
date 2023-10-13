import React from "react";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";

import { SkillsCardContainer, SkillsCard } from "../styles/MySkills.styled";

import { Skills } from "../utils/Data";

const MySkills = () => {
  return (
    <PaddingContainer id="Skills" top="10%" bottom="10%">
      <FlexContainer fullWidthChild>
        <SkillsCardContainer>
          {Skills.map((Skill) => (
            <SkillsCard>
              <IconContainer size="5rem">{Skill.icon}</IconContainer>

              <Heading as="h4" size="h4">
                {Skill.tech}
              </Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>
        <div>
          <Heading as="h4" size="h4">
            My Skills
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem">
            What <BlueText>I can do </BlueText>
          </Heading>

          <ParaText top="2rem" bottom="1.5rem">
            As a Computer Science Student , I have strong knowledge in
            programming languauges such as Java AND Python. And also as a full
            stack developer, I am familiar with front-end technologies such as
            HTML , CSS , JavaScript , React.js (library) and as well as back-end
            technologies such as Node.js and also have good understanding of
            working with SQL databases as well as NoSQL(MongoDB) databases
            through which i build dynamic and user-friendly websites . Apart
            from programming , I am also a certified AWS Cloud Practioner .
          </ParaText>
          <ParaText top="1rem" bottom="1.5rem">
            Besides technical skills, I am a very confident person with
            articulate and professional speaking abilities also can work under
            any environment meeting the deaadlines.
          </ParaText>
          <ParaText top="1rem" bottom="1.5rem">
            Being a Team Lead at Microsoft Student Chapter-VITAP I organised
            more than 5+ events with a high success ratio . I designed more than
            10+ posters and videos for the club events that were eye-catching
            and unique.
          </ParaText>
        </div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default MySkills;
