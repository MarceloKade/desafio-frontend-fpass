import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 80px;
  margin-top: 100px;
  margin-left: 40px;
`;

export const CardContainer = styled.div`
`;

export const Card = styled.figure`
    width: 700px;
    height: 700px;
    padding-bottom: 2rem;

    border: 4px solid rgb(255, 255, 255);
`;

export const IMG = styled.img`
    display: block;
    width: 100%;
    height: 105%;
    object-fit: cover;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.figcaption`

  font-size: 80px;
  margin-left:80px;
  text-shadow: 
    3px 3px 0px rgba(0, 0, 0, 0.8), 
    3px -3px 0px rgba(0, 0, 0, 0.8),
    -3px -3px 0px rgba(0, 0, 0, 0.8),
    -3px 3px 0px rgba(0, 0, 0, 0.8);
`;

export const Description = styled.p`
  font-size: 30px;
  margin-top:40px;
`;
export const About = styled.p`
  font-size: 30px;
  margin-top:5px;
`;