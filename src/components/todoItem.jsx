import React, { useContext, useState } from "react";
import StoreContext from "../context";

export const ToDoItem = () => {
  const store = useContext(StoreContext);

  const handleToggleEdit = (id) => {
    store.handleGetItEdit(id);
    store.handleToggleIsShowEdit();
  };

  const handleToggleDelete = (id) => {
    store.handleToggleDelete();
    store.handleGetId(id);
  };
  const [underlineDone, setUnderlineDone] = useState(false);
  const handleClick = (id, currentProgress) => {
    let nextProgress;
    // Xác định trạng thái tiếp theo
    if (currentProgress === "To Do") {
      nextProgress = "In Progress";
    } else if (currentProgress === "In Progress") {
      setUnderlineDone(true);
      nextProgress = "Done";
    } else {
      setUnderlineDone(false);
      nextProgress = "To Do"; // Hoặc một giá trị mặc định khác nếu cần
    }
    store.setTodos(
      store.todos.map((item) =>
        item.id === id ? { ...item, progress: nextProgress } : item
      )
    );
  };
  return (
    <div className="task__container">
      {store.todos.map((data) => (
        <div key={data.id} className="task__card">
          <div className="task__flex">
            <span className="task__title">Task</span>
            <span className={`task__name ${underlineDone && "task__done"}`}>
              {data.name}
            </span>
          </div>
          <div className="task__flex">
            <span className="task__title">Priority</span>
            <span
              className={`task__level ${
                data.status ? `text-${data.status}` : ""
              }`}
            >
              {data.status}
            </span>
          </div>
          <div className="task__status">
            <button
              className={`task__changeStatus ${
                data.progress
                  ? `data--${data.progress.replace(/\s+/g, "").toLowerCase()}`
                  : ""
              }`}
              onClick={() => handleClick(data.id, data.progress)}
            >
              {data.progress}
            </button>
          </div>
          <div className="task__action">
            <div
              className="task__edit"
              onClick={() => handleToggleEdit(data.id)}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/edit.svg`}
                alt="edit"
                className="task__edit--icon"
              />
            </div>
            <div
              className="task__delete"
              onClick={() => handleToggleDelete(data.id)}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/delete.svg`}
                alt="delete"
                className="task__edit--icon"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
