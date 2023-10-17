import React from "react";
import { List, Button } from "./ToDoStyle";
import { actionCreators } from "../../store";
import { connect } from "react-redux";

const ToDo = ({ text, onButtonClick }) => {
  return (
    <List>
      {text} <Button onClick={onButtonClick}>삭제</Button>
    </List>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onButtonClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
