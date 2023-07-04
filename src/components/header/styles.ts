import { styled } from "styled-components";

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: auto;
    gap: 80px;
    z-index:10;
    background-color: rgba(32, 32, 32, 0.9);
`;

export const Container = styled.div`
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.div`
  margin-left: 40px;
  padding: 0 0.4rem;
  display: flex;
  flex-basis: 200px;
  flex-grow: 1;
`;

export const Lista = styled.li`
  margin-left: 20px;
  list-style-type: none;
  flex-basis: 200px;
  flex-grow: 1;
`;

export const Links = styled.a`
  font-size: 40px;
  transition: color 0.4s;

  text-shadow: 
    0.8px 0.9px 0px rgba(0, 0, 0, 0.8), 
    0.8px -0.9px 0px rgba(0, 0, 0, 0.8),
    -0.8px -0.9px 0px rgba(0, 0, 0, 0.8),
    -0.8px 0.9px 0px rgba(0, 0, 0, 0.8);


  &:hover {
  color: indianRed;


}
`;