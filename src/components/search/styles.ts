import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 20px;
  ;
`;
export const InputSearch = styled.input`
  margin-top: 100px;
  border-radius: 10px;
  width: 400px;
  height: 40px;
  padding-left: 20px;
  font-size:20px;
  outline: none;
`;
export const ButtonSearch = styled.button`
  font-size: 18px;
  margin-top: 100px;
  width: 80px;
  height: 40px;
  outline: none;
  border-radius: 10px;
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

export const ContainerCard = styled.div`
  width: 100vw;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  ;
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