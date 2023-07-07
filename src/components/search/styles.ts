'use client'
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  

  @media (max-width: 640px){
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
`;
export const InputSearch = styled.input`
  border-radius: 10px;
  width: 400px;
  height: 40px;
  padding-left: 20px;
  font-size: 20px;
  outline: none;
  border: solid 2px;
  border-color: rgba(255, 255, 255, 0.1);
  background-color: rgba(0,0,0,0.8);
  box-shadow: none;

  @media (max-width: 640px){
  width: 340px;
  }
`;
export const ButtonSearch = styled.button`
  font-size: 18px;
  width: 80px;
  height: 40px;
  outline: none;
  border-radius: 10px;
  border: none;
  box-shadow: none;
  background: rgba(0,0,0,0.8);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: rgba(80, 80, 80, 80.8);
  }

  @media (max-width: 640px){
  margin-top: 0;

  }
`;


export const ContainerCard = styled.div`
  width: 100vw;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
  ;
`;

export const Name = styled.figcaption`
    display: flex;
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

export const NoResultMessage = styled.p`
    margin-top: 20px;
    font-size: 20px;
    text-shadow: 
    1px 0.9px 0px rgba(0, 0, 0, 0.8), 
    1px -0.9px 0px rgba(0, 0, 0, 0.8),
    -1px -0.9px 0px rgba(0, 0, 0, 0.8),
    -1px 0.9px 0px rgba(0, 0, 0, 0.8);
`;