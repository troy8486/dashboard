import React, { useState } from 'react';
import BarGraph from './charts/BarGraph'
import Divider from '@mui/material/Divider';
import './TotalCash.css';

const chartData = [
    { dateRange: 'Older', value: 10 },
    { dateRange: 'Jan 01-08', value: 20 },
    { dateRange: 'Jan 09-16', value: 30 },
    { dateRange: 'Jan 17-24', value: 40 },
    { dateRange: 'Jan 25-31', value: 50 },
    { dateRange: 'Future', value: 60 }
];

const InvoicesOwed: React.FC = () => {

    return (
        <div className="bar-graph-container">
            <div className="bar-graph-header">
                <h2 className="bar-graph-title">Total Cash Flow</h2>
                <div className="status-indicators">
                    <div className="status-rectangle green-rectangle"></div>
                    <span className="status-text">In</span>
                    <div className="status-rectangle green-rectangle"></div>
                    <span className="status-text">Out</span>
                </div>
            </div>
            <Divider></Divider>
            <BarGraph data={chartData} />
        </div>
    );
};

export default InvoicesOwed;
