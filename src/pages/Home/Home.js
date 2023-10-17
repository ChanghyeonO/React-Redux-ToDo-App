import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import ToDo from "../../component/Todo/ToDo";
import {
  Container,
  Content,
  Title,
  Form,
  Input,
  Button,
  ListArea,
} from "./HomeStyle";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");

  const OnChange = e => {
    setText(e.target.value);
  };

  const OnSubmit = e => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };
  return (
    <Container>
      <Content>
        <Title>투두리스트</Title>
        <Form onSubmit={OnSubmit}>
          <Input type="text" value={text} onChange={OnChange}></Input>
          <Button>추가</Button>
        </Form>
        <ListArea>
          {toDos.map(toDo => (
            <ToDo {...toDo} key={toDo.id} />
          ))}
        </ListArea>
      </Content>
    </Container>
  );
};

const mapStateToProps = state => {
  return { toDos: state };
};

const mapDispatchToProps = dispatch => {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
