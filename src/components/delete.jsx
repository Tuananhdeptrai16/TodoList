import React from "react";
import { useContext } from "react";
import StoreContext from "../context";
export const Delete = () => {
  const store = useContext(StoreContext);
  const handleToggleDeleTe = () => {
    store.handleToggleDelete();
  };
  const DeleteHandleAction = () => {
    store.DeleTeTodo(store.id);
    store.handleToggleDelete();
  };
  return (
    <>
      {store.toggleDelete && (
        <div className="modal">
          <div className="modal__content">
            <p className="modal__title">
              Are you sure you want to delete this task?
            </p>
            <div className="modal__action">
              <button onClick={DeleteHandleAction} className="modal__delete">
                Delete
              </button>
              <button className="modal__cancel " onClick={handleToggleDeleTe}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
