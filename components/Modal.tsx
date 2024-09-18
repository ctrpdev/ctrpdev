import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  showModal: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, className, showModal, onClose }) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
          onClick={handleClose}
        >
          <div
            className="bg-rose-600 text-gray-100 rounded-3xl p-16 flex flex-col justify-center items-center gap-5"
          >
            <div className={className}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

