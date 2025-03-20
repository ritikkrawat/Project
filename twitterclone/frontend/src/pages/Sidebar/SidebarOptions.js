import React from 'react';
import './SidebarOptions.css';
import XIcon from '@mui/icons-material/X';

const SidebarOptions = ({active , text , Icon}) => {
    return (
        <div className={`sidebarOptions ${active && 'sidebarOptions_active'}`}>
            <XIcon/>
            <h2>{text}</h2>
        </div>
    );
};

export default SidebarOptions;