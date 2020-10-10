import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import Context from "../context";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChangeMethod={props.onToggleMethod}
          />
        );
      })}
      <Context.Consumer>
        {(value) => {
          console.log(value);
        }}
      </Context.Consumer>
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggleMethod: PropTypes.func.isRequired,
};

//export default TodoList;