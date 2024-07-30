import React, { useState } from "react";
import Task from "./Task";
import SearchFilter from "./Searchfilter";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTask] = useState([
    {
      description: "Design new logo",
      assignee: "Kia",
      status: "pending",
      deadline: "02-08-2024",
    },
    {
      description: "Implement login feature",
      assignee: "Rose",
      status: "completed",
      deadline: "05-08-2024",
    },
    {
      description: "Write unit tests",
      assignee: "Junmark",
      status: "pending",
      deadline: "10-08-2024",
    },
    {
      description: "Fix UI Bugs",
      assignee: "Rico",
      status: "completed",
      deadline: "12-08-2024",
    },
    {
      description: "Update Documentation",
      assignee: "Angel",
      status: "pending",
      deadline: "13-08-2024",
    },
    {
      description: "Deploy to production",
      assignee: "Angelo",
      status: "completed",
      deadline: "20-08-2024",
    },
    {
      description: "Optimize Database",
      assignee: "Shen",
      status: "pending",
      deadline: "06-08-2024",
    },
    {
      description: "User testing",
      assignee: "Kolleen",
      status: "completed",
      deadline: "07-08-2024",
    },
    {
      description: "Plan sprint review",
      assignee: "Colleen",
      status: "pending",
      deadline: "14-08-2024",
    },
    {
      description: "Compile User Feedback",
      assignee: "John",
      status: "completed",
      deadline: "30-08-2024",
    },
  ]);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const Status = (index) => {
    const newTasks = [...tasks];
    newTasks[index].status =
      newTasks[index].status === "pending" ? "completed" : "pending";
    setTask(newTasks);
    setFilteredTasks(newTasks);
  };
  return (
    <div className="taskcontainer">
      <h2>Task List</h2>
      <SearchFilter tasks={tasks} setFilteredTasks={setFilteredTasks} />
      <ul>
        <li className="header">
          <span>No.</span>
          <span>Description</span>
          <span>Assignee</span>
          <span>Deadline</span>
          <span>Status</span>
          <span>Action</span>
        </li>
        {filteredTasks.map((task, index) => (
          <Task key={index} index={index} task={task} Status={Status} />
        ))}
      </ul>
    </div>
  );
};
export default Tasks;
