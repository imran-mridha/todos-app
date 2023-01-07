import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  //function to add items once user click add button
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  //function to update items once user click update button
  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  //function to remove items once user click remove icons
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  return (
    <div>
    <h1 className="header">Add your Plan for Today?</h1>

    {/*once we display header to the webpage 
    we will pass the function as props to TodoForm and TodoList to display the data to user*/}

    <TodoForm onSubmit={addTodo} />
    {/* <TodoList
      todos={todos}
      updateTodo={updateTodo}
      removeTodo={removeTodo}
      completeTodo={completeTodo}
    /> */}
  </div>
  );
};

export default Todos;
