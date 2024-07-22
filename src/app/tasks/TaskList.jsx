import React, { useContext } from "react";
import { TaskContext } from "./page";
import Task from "./Task";

const TaskList = ({ onChangeTask }) => {
  const tasks = useContext(TaskContext);
  return (
    <>
      {tasks.map((task) => (
        <ul key={task.id} className="flex">
          <Task onChangeTask={onChangeTask} task={task} />
        </ul>
      ))}
    </>
  );
};

export default TaskList;
