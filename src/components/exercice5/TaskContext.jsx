import React, { createContext, useReducer } from "react";

// Initial state
const initialState = { tasks: [] };

// Reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "REMOVE_TASK":
      return { ...state, tasks: state.tasks.filter((_, index) => index !== action.payload) };
    default:
      return state;
  }
};

// Create context
export const TaskContext = createContext();

// Provider component
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
