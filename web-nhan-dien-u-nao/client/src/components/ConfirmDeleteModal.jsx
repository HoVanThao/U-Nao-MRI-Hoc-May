import React from 'react';
import Modal from 'react-modal';
import Wrapper from '../assets/wrappers/ConfirmDeleteModal ';
Modal.setAppElement('#root');

const ConfirmDeleteModal = ({ isOpen, onRequestClose, onConfirm }) => {
    return (
        <Wrapper>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Confirm Delete"
                className="modal"
                overlayClassName="overlay"
            >
                <h2>Xác nhận xóa</h2>
                <p>Bạn có chắc chắn muốn xóa công việc này không?</p>
                <div className="modal-buttons">
                    <button className="btn" onClick={onConfirm}>Xóa</button>
                    <button className="btn" onClick={onRequestClose}>Hủy</button>
                </div>
            </Modal>
        </Wrapper>
    );
};

export default ConfirmDeleteModal;
