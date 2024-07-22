export const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "added":
      return [...tasks, { id: action.id, text: action.text, done: false }];

    case "changed":
      return tasks.map((task) =>
        task.id === action.task.id ? action.task : task
      );

    case "deleted":
      return tasks.filter((t) => t.id !== action.id);

    default:
      break;
  }
};
