import React, { useRef, useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskManager = () => {
  const { dispatch } = useContext(TaskContext);
  const taskInputRef = useRef(null);

  const addTask = () => {
    const task = taskInputRef.current.value;
    if (task.trim()) {
      dispatch({ type: "ADD_TASK", payload: task });
      taskInputRef.current.value = ""; // Clear the input
    }
  };

  return (
    <div>
      <input ref={taskInputRef} type="text" placeholder="Nouvelle tâche" />
      <button onClick={addTask}>Ajouter</button>
    </div>
  );
};

export default TaskManager;
