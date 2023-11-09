import React, { useState } from 'react';
import LineGraph from './charts/LineGraph'
import Button from '@mui/material/Button';
import './CheckingAccount.css';
import FileUploadModal from './FileUploadModal'
import Divider from '@mui/material/Divider';


const chartData = [
    { date: new Date('2019-01-01'), value: 10 },
    { date: new Date('2020-01-01'), value: 10 },
    { date: new Date('2021-01-01'), value: 30 },
    { date: new Date('2022-01-01'), value: 20 },
    { date: new Date('2023-01-01'), value: 50 },
    { date: new Date('2024-01-01'), value: 10 },
    { date: new Date('2025-01-01'), value: 10 },

];

const CheckingAccount: React.FC = () => {
    return (
        <div className="bar-graph-container">
            <div className="bar-graph-header">
                <h2 className="bar-graph-title">Checking Account</h2>
            </div>
            <Divider/>
            <LineGraph data={chartData} />
        </div>
    );
};

export default CheckingAccount;
