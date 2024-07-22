import React, { useContext, useState } from "react";
import { DispatchContext } from "./page";
let initId = 3;
const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(DispatchContext);

  const addTask = () => {
    setText("");
    dispatch({ type: "added", id: initId++, text: text, done: false });
  };

  return (
    <div className="flex">
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-2 border-cyan-700 rounded-md mr-2 pl-2"
      />
      <button
        onClick={addTask}
        className="border-2 border-cyan-700 rounded-md bg-lime-500 text-yellow-600 pl-4 pr-4 flex justify-center items-center">
        Add
      </button>
    </div>
  );
};

export default AddTask;
