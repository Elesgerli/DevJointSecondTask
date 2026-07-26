import React from 'react'

const Card = ({ title, count, color }) => {

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

                    {count}

                </div>

            </div>

            <div className="columnBody">

                <div className="emptyTask">

                    <p>Burada tapşırıq yoxdur</p>

                </div>

            </div>

        </div>

    );
}

export default Card
