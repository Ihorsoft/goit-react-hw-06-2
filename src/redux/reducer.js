// src/redux/reducers.js

import { statusFilters } from "./constants";

const initialState = {
  tasks: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
  filters: {
    status: statusFilters.all,
  },
};

export const rootReducer = (state = initialState, action) => {
  // Редюсер розрізняє екшени за значенням властивості type
  switch (action.type) {
    // Залежно від типу екшену виконуватиметься різна логіка
    case "tasks/addTask": {
      // Потрібно повернути новий об'єкт стану
      return {
        // в якому є всі дані існуючого стану
        ...state,
        // та новий масив задач
        tasks: [
          // в якому є всі існуючі завдання
          ...state.tasks,
          // та об'єкт нового завдання
          action.payload,
        ],
      };
    }
    case "tasks/deleteTask": {
      // Потрібно повернути новий об'єкт стану
      return {
        ...state,
        tasks: [
          // в якому є всі існуючі завдання on filter можна без квадратних дуж і без ... повторно
          ...state.tasks.filter((task) => task.id !== action.payload),
          // та об'єкт нового завдання
          // action.payload,
        ],
      };
    }
    case "tasks/toggleCompleted": {
      // Потрібно повернути новий об'єкт стану
      return {
        ...state,

        tasks: [
          ...state.tasks.map((task) => {
            if (task.id !== action.payload) {
              return task;
            }

            return {
              ...task,
              completed: !task.completed,
            };
          }),
        ],
      };
    }
    case "filters/setStatusFilter": {
      // Потрібно повернути новий об'єкт стану
      return {
        // в якому є всі дані існуючого стану
        ...state,
        // та новий обєкт фільтр
        filters: { ...state.filters, status: action.payload },
      };
    }

    default:
      // Кожен редюсер отримує всі екшени, відправлені в стор.
      // Якщо редюсер не повинен обробляти якийсь тип екшену,
      // необхідно повернути наявний стан без змін.
      return state;
  }
};
