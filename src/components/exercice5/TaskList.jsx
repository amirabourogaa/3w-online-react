import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);

  const removeTask = (index) => {
    dispatch({ type: "REMOVE_TASK", payload: index });
  };

  return (
    <ul>
      {state.tasks.map((task, index) => (
        <li key={index}>
          {task}{" "}
          <button onClick={() => removeTask(index)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
