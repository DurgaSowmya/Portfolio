import React from "react";

import { PaddingContainer, Heading, BlueText } from "../styles/Global.styled";

import { projectDetails } from "../utils/Data";
import Project from "../components/layouts/Project";

const MyProjects = () => {
  return (
    <PaddingContainer id="Projects" top="5%" bottom="10%">
      <Heading as="h4" size="h4">
        My Projects
      </Heading>

      <Heading as="h2" size="h2">
        What <BlueText>I have built</BlueText>
      </Heading>

      {projectDetails.map((project) => (
        <PaddingContainer key={project.id} top="5rem" bottom="5rem">
          <Project data={project} />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  );
};

export default MyProjects;
