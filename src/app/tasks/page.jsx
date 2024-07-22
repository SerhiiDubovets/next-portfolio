"use client";
import React, { useReducer, createContext } from "react";

import { tasksDate } from "./tasksDate";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { tasksReducer } from "./tasksReducer";

let initId = 3;

export const TaskContext = createContext(null);
export const DispatchContext = createContext(null);

const Tasks = () => {
  const initialTasks = tasksDate;
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const changeTask = (text, idTask) => {
    dispatch({
      type: "changed",
      id: idTask,
      text: text,
    });
  };

  return (
    <TaskContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        <div className="ml-auto mr-auto flex justify-center mt-12 flex-col w-[500px] gap-3">
          <h2 className="text-4xl font-bold mb-3">Day off in Kyoto</h2>
          <AddTask />
          <TaskList onChangeTask={changeTask} tasks={tasks} />
        </div>
      </DispatchContext.Provider>
    </TaskContext.Provider>
  );
};

export default Tasks;
