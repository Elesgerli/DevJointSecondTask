import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

const STORAGE_KEY = "kanban_tasks";

const loadTasks = () => {
    try {
        const tasks = localStorage.getItem(STORAGE_KEY);

        return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
        console.log(error);
        return [];
    }
};

const saveTasks = (tasks) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.log(error);
    }
};

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState(loadTasks);

    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    const addTask = (task) => {

        const newTask = {
            id: crypto.randomUUID(),
            ...task,
            createdAt: new Date().toLocaleDateString("az-AZ")
        };

        setTasks(prev => [...prev, newTask]);

    };

    const deleteTask = (id) => {

        setTasks(prev =>
            prev.filter(task => task.id !== id)
        );

    };

    const editTask = (updatedTask) => {

        setTasks(prev =>
            prev.map(task =>
                task.id === updatedTask.id
                    ? updatedTask
                    : task
            )
        );

    };

    return (

        <TaskContext.Provider
            value={{
                tasks,
                addTask,
                deleteTask,
                editTask
            }}
        >

            {children}

        </TaskContext.Provider>

    );

};

export const useTask = () => useContext(TaskContext);