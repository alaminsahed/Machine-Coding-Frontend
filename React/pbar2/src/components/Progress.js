import React from 'react';
import './Progress.css'

const Progress = ({ value = 0 }) => {
    if (value > 100) {
        value = 100;
    }
    return (
        <div className='progress'>
            <span>{value}</span>
            <div style={{ width: `${value}%` }} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value} />
        </div>
    );
};

export default Progress;