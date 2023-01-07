import React, { useState, useRef } from "react";

function TodoForm(props) {
  
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo_form">
      {props.edit ? (
        <div className="flex gap-5 my-3">
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="input input-bordered min-w-[400px]"
          />
          <button onClick={handleSubmit} className="btn btn-primary">
            Update
          </button>
        </div>
      ) : (
        <div className="flex gap-5">
          <input
            placeholder="Add your plan to list"
            value={input}
            onChange={handleChange}
            name="text"
            className="input input-bordered min-w-[400px]"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="btn btn-primary">
            Add
          </button>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
