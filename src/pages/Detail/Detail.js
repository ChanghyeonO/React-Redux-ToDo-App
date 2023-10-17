import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Content, Title, CreateId } from "./DetailStyle";

const Detail = () => {
  const toDos = useSelector(state => state);

  const rim = useParams().id;

  const todoText = toDos.find(toDo => toDo.id === parseInt(rim));

  return (
    <Container>
      <Content>
        <Title>{todoText?.text}</Title>
        <CreateId>고유 Id값 : {todoText?.id}</CreateId>
      </Content>
    </Container>
  );
};
export default Detail;
