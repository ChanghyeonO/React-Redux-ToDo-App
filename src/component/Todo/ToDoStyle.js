import styled from "styled-components";
import { Link as DefaultLink } from "react-router-dom";

export const StyledLink = styled(DefaultLink)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;

export const List = styled.ul`
  width: 80%;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 30px;
  justify-content: space-between;
  padding: 10px 10px 10px 10px;
  list-style-type: none;
  background-color: #888;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 15px;
`;

export const Button = styled.button`
  width: 80px;
  font-size: 25px;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #777;
`;
