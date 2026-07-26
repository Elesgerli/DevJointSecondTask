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

const sanitize = (text) => {

    return text
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .trim();

};
export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState(loadTasks);
    const [search, setSearch] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("Bütün prioritetlər");
    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    const addTask = (task) => {
        const isExist = tasks.some(item =>
            item.title.trim().toLowerCase() ===
            task.title.trim().toLowerCase()
        );
        if (isExist) {
            alert("Bu adda tapşırıq artıq mövcuddur.");
            return false;
        }

        const newTask = {

            id: crypto.randomUUID(),
            title: sanitize(task.title),
            description: sanitize(task.description),
            priority: task.priority,
            status: task.status,
            createdAt: new Date().toLocaleDateString("az-AZ")

        };

        setTasks(prev => [...prev, newTask]);
        return true;

    };

    const deleteTask = (id) => {

        setTasks(prev =>
            prev.filter(task => task.id !== id)
        );

    };

    const editTask = (updatedTask) => {

        const isExist = tasks.some(item =>
            item.id !== updatedTask.id &&
            item.title.trim().toLowerCase() ===
            updatedTask.title.trim().toLowerCase()

        );

        if (isExist) {

            alert("Bu adda başqa tapşırıq artıq mövcuddur.");
            return false;

        }
        setTasks(prev =>
            prev.map(task =>
                task.id === updatedTask.id
                    ? {
                        ...updatedTask,
                        title: sanitize(updatedTask.title),
                        description: sanitize(updatedTask.description)
                    }
                    : task
            )
        );
        return true;
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