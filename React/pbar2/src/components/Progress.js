import React from 'react';
import './Progress.css'

const Progress = ({ value = 0 }) => {
    if (value > 100) {
        value = 100;
    }
    return (
        <div className='progress'>
            <span>{value}</span>
            <div style={{ width: `${value}%` }} />
        </div>
    );
};

export default Progress;