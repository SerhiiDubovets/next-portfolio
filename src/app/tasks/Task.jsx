import React, { useState, useContext } from "react";
import { DispatchContext } from "./page";

const Task = ({ task }) => {
  //   const { id, text, done } = task;
  const [change, setChange] = useState(false);
  const [changeText, setChangeText] = useState(task.text);

  const dispatch = useContext(DispatchContext);

  const handleChangeTask = () => {
    setChange(true);
  };
  const handleSaveChangeTask = (idTask) => {
    setChange(false);
    dispatch({
      type: "changed",
      task: { id: idTask, text: changeText },
    });
  };

  const deleteTask = (idTask) => {
    dispatch({
      type: "deleted",
      id: idTask,
    });
  };
  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        className="border-2 w-6 h-6  border-cyan-700 rounded-md mr-2"
        onChange={(e) =>
          dispatch({
            type: "changed",
            task: { ...task, done: e.target.checked },
          })
        }
      />

      {!change ? (
        <>
          <span className="mr-2">{task.text}</span>
          <button
            onClick={handleChangeTask}
            className="border-2 mr-2 border-cyan-700 rounded-md bg-amber-500 text-yellow-100 pl-4 pr-4 flex justify-center items-center">
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            value={changeText}
            onChange={(e) => setChangeText(e.target.value)}
            className="border-2 border-cyan-700 rounded-md mr-2 pl-2"
          />
          <button
            onClick={() => handleSaveChangeTask(task.id)}
            className="border-2 mr-2 border-cyan-700 rounded-md bg-amber-500 text-yellow-100 pl-4 pr-4 flex justify-center items-center">
            Save
          </button>
        </>
      )}
      <button
        onClick={() => deleteTask(task.id)}
        className="border-2 border-cyan-700 rounded-md bg-red-500 text-yellow-100 pl-4 pr-4 flex justify-center items-center">
        Delete
      </button>
    </>
  );
};

export default Task;
