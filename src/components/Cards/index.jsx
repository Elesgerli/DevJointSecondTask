import React from "react";
import { useTask } from "../../context/context";
import TaskCard from "../TaskCard";

const Card = ({ title, color, status }) => {

    const { tasks } = useTask();

    const cardTasks = tasks.filter(
        task => task.status === status
    );

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

            <div className="columnBody">

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