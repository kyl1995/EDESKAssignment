import React from 'react';

const CustomToggle = ({ style, node }) => {
    //if (!node) {
    //    return null;
    //}

    return (
        <div style={style.base}>
            {node.toggled ? '-' : '+'}
        </div>
    );
};

export default CustomToggle;
