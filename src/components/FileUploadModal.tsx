import React from 'react';

interface FileUploadModalProps {
  show: boolean;
  onClose: () => void;
}

const FileUploadModal: React.FC<FileUploadModalProps> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Upload New Sales Invoice</h2>
        <input type="file" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FileUploadModal;
