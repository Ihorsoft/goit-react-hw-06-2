// src/redux/reducers.js
import { createReducer } from "@reduxjs/toolkit";

import { statusFilters } from "./constants";
// import { combineReducers } from "redux";
import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from "./actions";

const tasksInitialState = [];
/* const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
]; */

const filtersInitialState = {
  status: statusFilters.all,
};

export const tasksReducer = createReducer(tasksInitialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(deleteTask, (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    })
    .addCase(toggleCompleted, (state, action) => {
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return {
          ...task,
          completed: !task.completed,
        };
      });
    });
});

export const filtersReducer = createReducer(filtersInitialState, (builder) => {
  builder.addCase(setStatusFilter, (state, action) => {
    return {
      ...state,
      status: action.payload,
    };
  });
});

/* export const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case addTask.type: {
      return [...state, action.payload];
    }
    case deleteTask.type: {
      return state.filter((task) => task.id !== action.payload);
    }
    case toggleCompleted.type: {
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }

        return {
          ...task,
          completed: !task.completed,
        };
      });
    }

    default:
      return state;
  }
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case setStatusFilter.type:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
}; */

/* // without combineReducers
export const rootReducer = (state = {}, action) => {
  return {
    tasks: tasksReducer(state.tasks, action),
    filters: filtersReducer(state.filters, action),
  };
}; */

/* //  for configure store add export for aich reducers
export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
}); */
