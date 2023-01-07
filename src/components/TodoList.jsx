import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import { BsCheckCircle} from "react-icons/bs";

function TodoList({ todos, updateTodo, removeTodo, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <>
      <div
        key={index}
        className="flex justify-between my-5 bg-gray-300 p-2 items-center shadow-lg rounded"
      >
        <div 
        className={todo.isComplete ? "line-through text-red-600" : ""}
        key={todo.id}>
          {todo.text}
        </div>

        <div className="flex gap-3">
        <BsCheckCircle
            onClick={() => completeTodo(todo.id)}
            className="edit-icon cursor-pointer text-2xl text-blue-600"
          />
        <MdOutlineEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon cursor-pointer text-2xl text-yellow-600"
          />
          <MdDelete
            onClick={() => removeTodo(todo.id)}
            className="delete-icon cursor-pointer text-2xl text-red-600"
          />
          
        </div>
      </div>
    </>
  ));
}

export default TodoList;
