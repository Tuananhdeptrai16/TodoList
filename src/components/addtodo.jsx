import React, { useContext, useState } from "react";
import StoreContext from "../context";
export const AddToDo = () => {
  const store = useContext(StoreContext);
  const handleCancelAddTodo = () => {
    store.handleClick();
  };
  const [value, setValue] = useState("");
  const getValueInput = (e) => {
    setValue(e.target.value);
  };
  const handleClickTranfer = () => {
    if (value.trim() === "") {
      alert("Vui long nhap de add todo");
    } else {
      store.onAddTodoName(value);
      setValue("");
      store.handleClick();
    }
  };
  const [status, setStatus] = useState("");
  const clickHanleStatus = (sta) => {
    setStatus(sta);
    store.onAddTodoPriority(sta);
  };
  return (
    <>
      {store.isShow && (
        <div className="addtodo">
          <div className="addtodo__content">
            <div className="addtodo__title">
              <h3 className="addtodo__heading">Add Task</h3>

              <img
                onClick={handleCancelAddTodo}
                src={`${process.env.PUBLIC_URL}/images/cancel.svg`}
                alt=""
                className="addtodo__exit"
              />
            </div>
            <div className="addtodo__task">
              <label htmlFor="task">Task</label>
              <input
                placeholder="Type your task here..."
                type="text"
                name=""
                id="task"
                value={value}
                onChange={getValueInput}
                className="addtodo__input"
              />
            </div>
            <div className="addtodo__priority">
              <p className="addtodo__priority--title">Priority</p>
              <ul className="addtodo__priorty">
                <li
                  onClick={() => clickHanleStatus("high")}
                  className={`high ${status === "high" ? "active-high" : ""}`}
                >
                  High
                </li>
                <li
                  onClick={() => clickHanleStatus("medium")}
                  className={`medium ${
                    status === "medium" ? "active-medium" : ""
                  }`}
                >
                  Medium
                </li>
                <li
                  onClick={() => clickHanleStatus("low")}
                  className={`low ${status === "low" ? "active-low" : ""}`}
                >
                  Low
                </li>
              </ul>
            </div>
            <div className="addtodo__submit">
              <button
                onClick={handleClickTranfer}
                className="addtodo__add--button"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
