import styled from "styled-components";

export const Container = styled.div`
  padding: 100px;
`;

export const Content = styled.div`
  width: 60%;
  height: 1000px;
  background-color: #999;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-radius: 30px;
`;

export const Title = styled.h1`
  height: 100px;
  font-size: 50px;
  font-wight: bold;
  color: #fff;
  margin-top: 100px;
`;

export const Form = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 50%;
  font-size: 25px;
  border: none;
  border-radius: 10px;
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

export const ListArea = styled.div`
  width: 100%;
  height: 100%;
`;
