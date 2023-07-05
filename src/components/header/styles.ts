import Link from "next/link";
import { styled } from "styled-components";

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    width: 100vw;
    height: auto;
    gap: 80px;
    z-index:10;
    background-color: rgba(32, 32, 32, 0.9);
`;

export const Image = styled.img`
`;
export const Lista = styled.li`
  margin-left: 20px;
  list-style-type: none;
`;

export const Links = styled(Link)`
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