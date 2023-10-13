import React from "react";

import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../../styles/Global.styled";

import {
  TechStackCard,
  ProjectImage,
  ProjectImageContainer,
} from "../../styles/MyProject.styled";

import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.png";

import { FaGithub } from "react-icons/fa";

const Project = ({ data }) => {
  return (
    <FlexContainer fullWidthChild>
      <div>
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            {data.project_name}
          </Heading>
          <IconContainer size="2rem">
            <FaGithub color="#7eadfc" />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            {data.tech_stack.map((stack) => (
              <TechStackCard>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
          {data.project_desc}
        </ParaText>
        <Button href="https://github.com/DurgaSowmya"> Visit Here </Button>
      </div>

      <ProjectImageContainer jusify="flex-end">
        <img src={Project1} alt="Project1" />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
