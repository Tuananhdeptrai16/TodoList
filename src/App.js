import "./App.css";
import { AddToDo } from "./components/addtodo";
import { TodoList } from "./components/todolist";
import { useState } from "react";
import StoreContext from "./context";
import { EditTodo } from "./components/edittodo";
import { Delete } from "./components/delete";
const datas = [
  {
    id: 1,
    name: "Build todo App",
    status: "low",
    progress: "To Do",
  },
  {
    id: 2,
    name: "Studying with Hoa",
    status: "low",
    progress: "To Do",
  },
  {
    id: 3,
    name: "Watch TV",
    status: "low",
    progress: "To Do",
  },
];
function App() {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(!isShow);
  };
  const [isShowEdit, setIsShowEdit] = useState(false);
  const handleToggleIsShowEdit = () => {
    setIsShowEdit(!isShowEdit);
  };

  const [todos, setTodos] = useState(datas);
  const [priority, setPriority] = useState("");
  const onAddTodoPriority = (status) => {
    setPriority(status);
  };

  const onAddTodoName = (todovaluename) => {
    const newData = {
      id: todos.length + 1,
      name: todovaluename,
      status: priority,
      progress: "To Do",
    };
    const newDataList = [...todos, newData];
    setTodos(newDataList);
  };

  const [dataEdits, setDataEdits] = useState([]);
  const handleGetItEdit = (idEdit) => {
    setDataEdits(todos.filter((item) => item.id === idEdit));
  };
  const onEditTodo = (valueEdited) => {
    const objectValueEdit = dataEdits[0];
    console.log(dataEdits[0]);
    objectValueEdit.name = valueEdited;
    objectValueEdit.status = priority;
  };
  const [toggleDelete, setToggleDelete] = useState(false);
  const handleToggleDelete = () => {
    setToggleDelete(!toggleDelete);
  };

  const [id, setId] = useState("");
  const handleGetId = (id) => {
    setId(id);
  };

  const DeleTeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  return (
    <StoreContext.Provider
      value={{
        id,
        priority,
        dataEdits,
        todos,
        datas,
        isShow,
        isShowEdit,
        toggleDelete,
        handleClick,
        handleToggleIsShowEdit,
        handleToggleDelete,
        onAddTodoName,
        DeleTeTodo,
        handleGetId,
        onAddTodoPriority,
        handleGetItEdit,
        onEditTodo,
        setTodos,
      }}
    >
      <div className="App">
        <AddToDo></AddToDo>
        <TodoList onAddTodoName={onAddTodoName} isShow={isShow}></TodoList>
        {(isShow || isShowEdit || toggleDelete) && (
          <div className="overlay"> </div>
        )}
        {isShowEdit && <EditTodo></EditTodo>}
        {toggleDelete && <Delete></Delete>}
      </div>
    </StoreContext.Provider>
  );
}

export default App;
