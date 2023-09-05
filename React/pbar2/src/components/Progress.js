import React from 'react';
import './Progress.css'

const Progress = ({ value = 0 }) => {
    return (
        <div className='progress'>
            <span>{value}</span>
            <div />

        </div>
    );
};

export default Progress;