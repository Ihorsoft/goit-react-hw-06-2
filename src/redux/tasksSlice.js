import { createSlice, nanoid } from "@reduxjs/toolkit";
//import { toggleCompleted } from "./actions";
const t1 = "hallou";
const tasksSlice = createSlice({
  name: "tasks",
  // initialState: {[]},
  initialState: {
    item1: [
      {
        text: "Hellou",
        id: "0",
        completed: false,
      },
    ],
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.item1.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.item1.findIndex((task) => task.id === action.payload);
      state.item1.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state.item1) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
