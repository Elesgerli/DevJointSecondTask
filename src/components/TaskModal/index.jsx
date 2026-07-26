import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useTask } from '../../context/context';

const TaskModal = ({ open, onClose, isEdit = false, task }) => {

    const { addTask, editTask } = useTask();
    const [title, setTitle] = useState(task?.title || "");
    const [description, setDescription] = useState(task?.description || "");
    const [priority, setPriority] = useState(task?.priority || "Aşağı");
    const [status, setStatus] = useState(task?.status || "todo");

    if (!open) return null;
    const handleSubmit = (e) => {

        e.preventDefault();

        if (!title.trim()) {
            alert("Başlıq boş ola bilməz!");
            return;
        }

        const taskData = {
            title: title.trim(),
            description: description.trim(),
            priority,
            status,
        };

        if (isEdit) {

            editTask({
                ...task,
                ...taskData,
            });

        } else {

            addTask(taskData);

        }

        // Formu sıfırla
        setTitle("");
        setDescription("");
        setPriority("Aşağı");
        setStatus("todo");

        onClose();

    };

    return (

        <div className="taskModal">

            <div
                className="modalOverlay"
                onClick={onClose}
            ></div>

            <div className="modalContent">

                <div className="modalHeader">

                    <div>

                        <h2>
                            {isEdit ? "Tapşırığı Redaktə Et" : "Yeni Tapşırıq"}
                        </h2>

                        <p>
                            Tapşırıq məlumatlarını doldurun.
                        </p>

                    </div>

                    <button
                        className="closeBtn"
                        onClick={onClose}
                    >
                        <IoClose />
                    </button>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="formGroup">

                        <label>Başlıq</label>

                        <input
                            type="text"
                            placeholder="Tapşırığın adını daxil edin..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                    </div>

                    <div className="formGroup">

                        <label>Açıqlama</label>

                        <textarea
                            placeholder="Tapşırıq haqqında qısa qeyd..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>

                    </div>

                    <div className="formRow">

                        <div className="formGroup">

                            <label>Prioritet</label>

                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >

                                <option>Aşağı</option>
                                <option>Orta</option>
                                <option>Yüksək</option>

                            </select>

                        </div>

                        <div className="formGroup">

                            <label>Status</label>

                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >

                                <option value="todo">Gözləmədə</option>
                                <option value="progress">İcra olunur</option>
                                <option value="done">Tamamlandı</option>

                            </select>

                        </div>

                    </div>

                    <div className="modalButtons">

                        <button
                            type="button"
                            className="cancelBtn"
                            onClick={onClose}
                        >
                            Ləğv et
                        </button>

                        <button
                            className="saveBtn"
                            type="submit"
                        >
                            {isEdit ? "Yadda saxla" : "Əlavə et"}
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );
};

export default TaskModal;