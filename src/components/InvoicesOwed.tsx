import React, { useState } from 'react';
import BarGraph from './charts/BarGraph'
import Button from '@mui/material/Button';
import './InvoicesOwed.css';
import FileUploadModal from './FileUploadModal'
import Divider from '@mui/material/Divider';


const chartData = [
    { dateRange: 'Older', value: 10 },
    { dateRange: 'Jan 01-08', value: 20 },
    { dateRange: 'Jan 09-16', value: 30 },
    { dateRange: 'Jan 17-24', value: 40 },
    { dateRange: 'Jan 25-31', value: 50 },
    { dateRange: 'Future', value: 60 }
];

const InvoicesOwed: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div className="bar-graph-container">
            <div className="bar-graph-header">
                <h2 className="bar-graph-title">Invoices owed to you</h2>
                <Button variant="outlined" onClick={handleButtonClick}>
                    New Sales Invoice
                </Button>
            </div>
            <Divider/>
            <BarGraph data={chartData} />
            <FileUploadModal show={showModal} onClose={handleCloseModal} />
        </div>
    );
};

export default InvoicesOwed;
