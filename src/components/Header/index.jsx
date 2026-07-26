import { FiSearch } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { useState } from "react";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";

import React from 'react'
import TaskModal from "../TaskModal";

const Header = () => {
  const priorities = [
    "Bütün prioritetlər",
    "Yüksək",
    "Orta",
    "Aşağı",
  ];
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [selected, setSelected] = useState(priorities[0]);
  return (
  <>
  
    <header className="header">
      <div className="container">
        <div className="headerWrapper">
          <div className="headerLogo">
            <div className="headerIcon">
              K
            </div>
            <h2 className="headerTitle">
              Kanban İdarəetmə
            </h2>
          </div>
          <div className="headerRight">
            <div className="headerSearch">
              <FiSearch />
              <input
                type="text"
                placeholder="Tapşırıq axınında axtar..."
              />
            </div>
            <div className="headerFilter">

              <div
                className="filterSelected"
                onClick={() => setOpen(!open)}
              >

                <div className="filterLeft">

                  <MdOutlineLocalFireDepartment />

                  <span>{selected}</span>

                </div>

                <IoChevronDown
                  className={open ? "rotateArrow" : ""}
                />

              </div>

              {
                open &&
                <div className="filterDropdown">

                  {
                    priorities.map((item) => (

                      <div
                        key={item}
                        className={`filterOption ${selected === item ? "activeOption" : ""
                          }`}
                        onClick={() => {

                          setSelected(item);
                          setOpen(false);

                        }}
                      >

                        {item}

                      </div>

                    ))
                  }

                </div>
              }

            </div>

            <button className="headerBtn" onClick={()=>{
              setOpen2(true)
            }}>
              <HiOutlinePlus />
              Yeni Tapşırıq
            </button>
          </div>
        </div>
      </div>
    </header>
    <TaskModal
    open={open2}
    onClose={() => setOpen2(false)}
/>
  </>
  );
}

export default Header
