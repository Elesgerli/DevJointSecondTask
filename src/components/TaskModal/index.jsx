import React from 'react'
import { IoClose } from 'react-icons/io5';

const TaskModal = ({ open, onClose, isEdit = false }) => {
    if (!open) return null;
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

                <form>

                    <div className="formGroup">

                        <label>Başlıq</label>

                        <input
                            type="text"
                            placeholder="Tapşırığın adını daxil edin..."
                        />

                    </div>

                    <div className="formGroup">

                        <label>Açıqlama</label>

                        <textarea
                            placeholder="Tapşırıq haqqında qısa qeyd..."
                        ></textarea>

                    </div>

                    <div className="formRow">

                        <div className="formGroup">

                            <label>Prioritet</label>

                            <select>

                                <option>Aşağı</option>
                                <option>Orta</option>
                                <option>Yüksək</option>

                            </select>

                        </div>

                        <div className="formGroup">

                            <label>Status</label>

                            <select>

                                <option>Gözləmədə</option>
                                <option>İcra olunur</option>
                                <option>Tamamlandı</option>

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
}

export default TaskModal
