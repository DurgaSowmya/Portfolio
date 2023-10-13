import styled from "styled-components";

export const TechStackCard = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  padding: 0.3rem 1rem;
  border-radius: 5px;
`;

export const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
`;

export const ProjectImage = styled.div`
  border: 1px solid #fff;
  width: 80%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;
