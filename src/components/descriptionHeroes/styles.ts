import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 80px;
  margin-top: 100px;
  margin-left: 40px;

    @media (max-width: 800px){
      position: relative;
      width: 100vw;
      flex-direction: column;
      margin-left: 0;
      align-items: center;
      justify-content: center;

  }

`;

export const CardContainer = styled.div`
@media (max-width: 640px){
  margin-top: -40px;

  }
`;

export const Card = styled.figure`
  width: 700px;
  height: 700px;
  padding-bottom: 2rem;
  border: 4px solid rgb(255, 255, 255);

  @media (max-width: 800px){
    margin-top: 100px;
  }

  @media (max-width: 640px){
    width: 350px;
    height: 350px;
  }
`;

export const IMG = styled.img`
    display: block;
    width: 100%;
    height: 105%;
    object-fit: cover;

    @media (max-width: 640px){
      height: 111%;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 800px){
  align-items: center;
  }
`;

export const Name = styled.figcaption`

  font-size: 55px;
  text-shadow: 
    3px 3px 0px rgba(0, 0, 0, 0.8), 
    3px -3px 0px rgba(0, 0, 0, 0.8),
    -3px -3px 0px rgba(0, 0, 0, 0.8),
    -3px 3px 0px rgba(0, 0, 0, 0.8);

    @media (max-width: 800px){
  font-size: 55px;
  position: absolute;
  top: 0;
  }

  @media (max-width: 640px){
    font-size: 30px;
  }
`;

export const Description = styled.p`
  font-size: 30px;
  margin-top:40px;

  @media (max-width: 800px){
    margin-top: -40px;
    font-size: 20px;
    padding-right: 40px;
    padding-left: 40px;

  }

  @media (max-width: 640px){
    padding-right: 15px;
    padding-left: 15px;
    font-size: 18px;
    margin-top: -60px;
  }
`;

export const ContainerAbout = styled.p`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top:100px;

    @media (max-width: 800px){
    gap: 0 250px;
    margin-top:20px;


  }

  @media (max-width: 640px){
      gap: 0 80px;

  }
`;
export const About = styled.p`
  font-size: 30px;
  

  @media (max-width: 640px){
    font-size: 20px;


  }
`;