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
    const [search, setSearch] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("Bütün prioritetlər");
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
    const moveTask = (id, newStatus) => {

        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, status: newStatus }
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
                editTask,
                moveTask,
                search,
                setSearch,
                priorityFilter,
                setPriorityFilter
            }}
        >

            {children}

        </TaskContext.Provider>

    );

};

export const useTask = () => useContext(TaskContext);