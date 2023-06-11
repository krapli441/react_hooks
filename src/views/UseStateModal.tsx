import React, { useState } from "react";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>창 열기</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="닫기" onClick={closeModal}>
              &times;
            </span>
            <h2>useState로 모달 띄우기</h2>
            <p>모달 창을 띄웠습니다.</p>
          </div>
        </div>
      )}
    </div>
  );
}
