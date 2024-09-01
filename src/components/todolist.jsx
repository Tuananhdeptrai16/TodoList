import React, { useContext } from "react";
import { ToDoItem } from "./todoItem";
import StoreContext from "../context";
export const TodoList = () => {
  const store = useContext(StoreContext);
  const ToggleShow = () => {
    store.handleClick();
  };
  return (
    <div className="todolist">
      <div className="todolist__info">
        <h1 className="todolist__heading">Task List </h1>
        <button className="todolist__button" onClick={ToggleShow}>
          <img
            src={`${process.env.PUBLIC_URL}/images/plus.svg`}
            alt="plus"
            className="todolist__icon"
          />
          Add Task
        </button>
      </div>
      <div className="todolist__content">
        <ToDoItem></ToDoItem>
      </div>
    </div>
  );
};
