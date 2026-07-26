import React, { useState } from "react";
import { useTask } from "../../context/context";
import TaskCard from "../TaskCard";

const Card = ({ title, color, status }) => {

    const { tasks, moveTask } = useTask();
    const [dragOver, setDragOver] = useState(false);
    const cardTasks = tasks.filter(
        task => task.status === status
    );
    const handleDrop = (e) => {

        e.preventDefault();
        const id = e.dataTransfer.getData("taskId");
        moveTask(id, status);
        setDragOver(false);
    };
    const handleDragOver = (e) => {

        e.preventDefault();

    };
    const handleDragEnter = () => {

        setDragOver(true);

    };
    const handleDragLeave = () => {

        setDragOver(false);

    };
    return (

        <div className="column">

            <div className="columnHeader">

                <div className="columnTitle">

                    <span
                        className="columnDot"
                        style={{ background: color }}
                    ></span>

                    <h3>{title}</h3>

                </div>

                <div className="columnCount">

                    {cardTasks.length}

                </div>

            </div>

            <div className={`columnBody ${dragOver ? "dragActive" : ""}`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}>

                {
                    cardTasks.length === 0 ? (

                        <div className="emptyTask">

                            <p>Burada tapşırıq yoxdur</p>

                        </div>

                    ) : (

                        cardTasks.map((task) => (

                            <TaskCard
                                key={task.id}
                                task={task}
                            />

                        ))

                    )
                }

            </div>

        </div>

    );

};

export default Card;