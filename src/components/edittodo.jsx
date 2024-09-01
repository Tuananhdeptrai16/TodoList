import React, { useContext, useState } from "react";
import StoreContext from "../context";
export const EditTodo = () => {
  const store = useContext(StoreContext);
  const handleCancelAddTodo = () => {
    store.handleToggleIsShowEdit();
  };
  const valueEditName = store.dataEdits.map((item) => {
    return item.name;
  });
  const statusEdit = store.dataEdits.map((item) => {
    return item.status;
  });
  const [value, setvalue] = useState(valueEditName[0]);
  const handleEditInput = (e) => {
    setvalue(e.target.value);
  };

  const [status, setStatus] = useState(statusEdit[0]);
  const clickHanleStatus = (sta) => {
    setStatus(sta);
    store.onAddTodoPriority(sta);
  };
  const handleClickChangeEdit = () => {
    store.onEditTodo(value);
    store.handleToggleIsShowEdit();
  };
  return (
    <>
      {store.isShowEdit && (
        <div className="addtodo">
          <div className="addtodo__content">
            <div className="addtodo__title">
              <h3 className="addtodo__heading">Edit Task</h3>

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
                value={value}
                id="task"
                className="addtodo__input"
                onChange={handleEditInput}
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
                onClick={handleClickChangeEdit}
                className="addtodo__add--button"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
