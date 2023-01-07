import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {toast } from 'react-toastify';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  //function to add items once user click add button
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
    toast.success('Successfully added your task!!!', {autoClose: 500})

  };

  //function to update items once user click update button
  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
    toast.success('Successfully Update your task!!!', {autoClose: 500})
  };

  //function to remove items once user click remove icons
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
    toast.success('Successfully Deleted your task!!!', {autoClose: 500})
  };

   //function to show items as completed once user click on completed task
   const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
    <h1 className="text-xl mb-3 uppercase">Add your Plan for Today?</h1>

    <TodoForm onSubmit={addTodo} />
    <TodoList
      todos={todos}
      updateTodo={updateTodo}
      removeTodo={removeTodo}
      completeTodo={completeTodo}
    />
  </div>
  );
};

export default Todos;
