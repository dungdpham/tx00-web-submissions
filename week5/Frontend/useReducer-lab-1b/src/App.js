import './app.css';

// // useState
// import { useState } from 'react';

// function App() {
//   // State for task input
//   const [taskInput, setTaskInput] = useState('');

//   // State for the list of tasks
//   const [tasks, setTasks] = useState([]);

//   // State for the task being edited
//   const [editingTask, setEditingTask] = useState(null);

//   // State for the filter (completed or active tasks)
//   const [filter, setFilter] = useState('all');

//   // Function to add a task
//   const addTask = () => {
//     if (taskInput.trim() !== '') {
//       setTasks([...tasks, { text: taskInput, completed: false }]);
//       setTaskInput('');
//     }
//   };

//   // Function to toggle task completion
//   const toggleTaskCompletion = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };

//   // Function to edit a task
//   const editTask = (index, newText) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].text = newText;
//     setTasks(updatedTasks);
//     //setEditingTask(null);
//   };

//   // Function to delete a task
//   const deleteTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   };

//   // Function to clear completed tasks
//   const clearCompletedTasks = () => {
//     const updatedTasks = tasks.filter((task) => !task.completed);
//     setTasks(updatedTasks);
//   };

//   // Filtered tasks based on the selected filter
//   const filteredTasks = tasks.filter((task) => {
//     if (filter === 'completed') return task.completed;
//     if (filter === 'active') return !task.completed;
//     return true; // 'all' filter, show all tasks
//   });

//   return (
//     <div className="todo-app">
//       <h1>Todo App</h1>
//       <div className="add-task">
//         <input
//           type="text"
//           placeholder="Add a new task"
//           value={taskInput}
//           onChange={(e) => setTaskInput(e.target.value)}
//         />
//         <button onClick={addTask}>Add</button>
//       </div>
//       <div className="filter">
//         <button onClick={() => setFilter('all')}>All</button>
//         <button onClick={() => setFilter('active')}>Active</button>
//         <button onClick={() => setFilter('completed')}>Completed</button>
//       </div>
//       <ul>
//         {filteredTasks.map((task, index) => (
//           <li key={index}>
//             {editingTask === index ? (
//               <input
//                 type="text"
//                 value={task.text}
//                 onChange={(e) => editTask(index, e.target.value)}
//                 onBlur={() => setEditingTask(null)}
//                 autoFocus
//               />
//             ) : (
//               <>
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => toggleTaskCompletion(tasks.indexOf(task))}
//                 />
//                 <span
//                   className={task.completed ? 'completed' : ''}
//                   onClick={() => setEditingTask(index)}
//                 >
//                   {task.text}
//                 </span>
//                 <button onClick={() => deleteTask(index)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//       {tasks.some((task) => task.completed) && (
//         <button onClick={clearCompletedTasks}>Clear Completed</button>
//       )}
//     </div>
//   );
// }

import { useReducer } from 'react';

const initialState = {
  taskInput: '',
  tasks: [],
  editingTask: null,
  filter: 'all',
};

function taskReducer(state, action) {
  switch (action.type) {
    case 'SET_TASK_INPUT':
      return { ...state, taskInput: action.payload };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            text: action.payload,
            completed: false,
          },
        ],
        taskInput: '',
      };
    case 'TOGGLE_TASK':
      // const updatedTasksToggle = [...state.tasks];
      // updatedTasksToggle[action.payload].completed =
      //   !updatedTasksToggle[action.payload].completed;
      // return {
      //   ...state,
      //   tasks: updatedTasksToggle,
      // };

      const updatedTasksToggle = [...state.tasks];
      updatedTasksToggle[action.payload] = {
        ...updatedTasksToggle[action.payload],
        completed: !updatedTasksToggle[action.payload].completed,
      };
      return {
        ...state,
        tasks: updatedTasksToggle,
      };
    case 'EDIT_TASK':
      const updatedTasksEdit = [...state.tasks];
      updatedTasksEdit[action.payload.index].text = action.payload.newText;
      return {
        ...state,
        tasks: updatedTasksEdit,
      };
    case 'SET_EDIT_TASK':
      return {
        ...state,
        editingTask: action.payload,
      };
    case 'DELETE_TASK':
      const updatedTasksDelete = [...state.tasks];
      updatedTasksDelete.splice(action.payload, 1);
      return {
        ...state,
        tasks: updatedTasksDelete,
      };
    case 'CLEAR_COMPLETED_TASKS':
      const updatedTaskNoCompleted = state.tasks.filter(
        (task) => !task.completed
      );
      return {
        ...state,
        tasks: updatedTaskNoCompleted,
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const handleAddTask = () => {
    if (state.taskInput.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: state.taskInput });
    }
  };

  const handleToggleTask = (index) => {
    console.log(index);
    dispatch({ type: 'TOGGLE_TASK', payload: index });
  };

  const handleEditTask = (index, newText) => {
    dispatch({ type: 'EDIT_TASK', payload: { index, newText } });
  };

  const handleSetEditTask = (index) => {
    dispatch({ type: 'SET_EDIT_TASK', payload: index });
  };

  const handleClearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED_TASKS' });
  };

  const handleSetFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === 'completed') return task.completed;
    if (state.filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a new task"
          value={state.taskInput}
          onChange={(e) =>
            dispatch({ type: 'SET_TASK_INPUT', payload: e.target.value })
          }
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="filter">
        <button onClick={() => handleSetFilter('all')}>All</button>
        <button onClick={() => handleSetFilter('active')}>Active</button>
        <button onClick={() => handleSetFilter('completed')}>Completed</button>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            {state.editingTask === index ? (
              <input
                type="text"
                value={task.text}
                onChange={(e) => handleEditTask(index, e.target.value)}
                onBlur={() => handleSetEditTask(null)}
                autoFocus
              />
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTask(state.tasks.indexOf(task))}
                />
                <span
                  className={task.completed ? 'completed' : ''}
                  onClick={() => handleSetEditTask(index)}
                >
                  {task.text}
                </span>
                <button
                  onClick={() =>
                    dispatch({ type: 'DELETE_TASK', payload: index })
                  }
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      {state.tasks.some((task) => task.completed) && (
        <button onClick={handleClearCompleted}>Clear Completed</button>
      )}
    </div>
  );
}

export default App;
