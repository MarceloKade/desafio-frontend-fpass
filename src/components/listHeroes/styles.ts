import { styled } from "styled-components";

export const MainContainer = styled.div`
  max-width: 1440px;
  padding-left: 4rem;
  padding-right: 4rem;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;

  @media (max-width: 800px){
      grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px){
      grid-template-columns: 1fr;
  }
`;
export const CardContainer = styled.div`
    width: 350px;
    height: 400px;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px){
      width: 300px;
      height: 350px;
  }

`;

export const Card = styled.figure`
    width: 350px;
    height: 400px;
    padding-bottom: 2rem;

    border: 4px solid rgb(255, 255, 255);

    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    
    transform-style: preserve-3d;
    transition: all .25s ease-out;
    cursor: pointer;

    @media (max-width: 800px){
      width: 300px;
      height: 350px;
  }
`;

export const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;

    object-fit: cover;
`;
export const Glow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .25s ease-out;
    mix-blend-mode: hard-light;
    background: radial-gradient(circle at 50% 0%, rgb(184,196,211), transparent);
    
`;
export const Name = styled.figcaption`
    display:flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    height: 32px;
    background-color: darkred;
    font-size: 20px;
    text-shadow: 
    0.8px 0.9px 0px rgba(0, 0, 0, 0.8), 
    0.8px -0.9px 0px rgba(0, 0, 0, 0.8),
    -0.8px -0.9px 0px rgba(0, 0, 0, 0.8),
    -0.8px 0.9px 0px rgba(0, 0, 0, 0.8);
`;