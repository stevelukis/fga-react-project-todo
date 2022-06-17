import React, { useState } from 'react';
import AddField from "./components/Form";
import Todo from "./components/Todo";
import { Container } from "react-bootstrap";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: "todo-" + Math.floor(Math.random() * 1000), // Get a random ID
            name: "eat",
            completed: false
        }
    ]);

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        })
        setTasks(updatedTasks);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }

    function editTask(id, newName) {
        const editedTaskList = tasks.map(task => {
            if (id === task.id) {
                return { ...task, name: newName };
            }
            return task;
        })
        setTasks(editedTaskList);
    }

    function addTask(name) {
        const newTask = {
            id: "todo-" + Math.floor(Math.random() * 1000), // Get a random ID
            name: name,
            completed: false
        };
        setTasks([...tasks, newTask]);
    }

    return (
        <Container className={"text-center"}>
            <h1 className={"h1"}>My ToDo list</h1>
            <AddField addTask={addTask}/>
            <div className={"my-3"}></div>
            {
                tasks
                    .map(task => (
                        <Todo
                            id={task.id}
                            name={task.name}
                            completed={task.completed}
                            key={task.id}
                            toggleTaskCompleted={toggleTaskCompleted}
                            deleteTask={deleteTask}
                            editTask={editTask}
                        />
                    ))
            }
        </Container>
    );
}

export default App;
