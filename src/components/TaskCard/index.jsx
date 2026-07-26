import React, { useState } from "react";
import { LuClock3 } from "react-icons/lu";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useTask } from "../../context/context";
import TaskModal from "../TaskModal";

const TaskCard = ({ task }) => {

    const { deleteTask } = useTask();

    const [editOpen, setEditOpen] = useState(false);

    const handleDelete = () => {

        const confirmDelete = window.confirm(
            "Bu tapşırığı silmək istədiyinizə əminsiniz?"
        );

        if (confirmDelete) {
            deleteTask(task.id);
        }

    };

    return (
        <>

            <div className="taskCard">

                <div className={`taskPriority ${task.priority.toLowerCase()}`}>

                    {task.priority}

                </div>

                <h3 className="taskTitle">

                    {task.title}

                </h3>

                <p className="taskCategory">

                    {task.description}

                </p>

                <div className="taskFooter">

                    <div className="taskDate">

                        <LuClock3 />

                        <span>{task.createdAt}</span>

                    </div>

                    <div className="taskActions">

                        <button
                            className="editBtn"
                            onClick={() => setEditOpen(true)}
                        >

                            <FiEdit2 />

                        </button>

                        <button
                            className="deleteBtn"
                            onClick={handleDelete}
                        >

                            <RiDeleteBin6Line />

                        </button>

                    </div>

                </div>

            </div>

            <TaskModal
                open={editOpen}
                onClose={() => setEditOpen(false)}
                isEdit={true}
                task={task}
            />

        </>
    );

};

export default TaskCard;