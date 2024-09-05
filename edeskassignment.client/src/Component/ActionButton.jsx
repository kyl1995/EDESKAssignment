import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import viewImage from '../assets/view.png';
import editImage from '../assets/edit.png';
import deleteImage from '../assets/delete.png';

const ActionButton = (props) => {
    const print = () => {
        const printWindow = window.open('', '', 'height=600,width=800');

        $(printWindow.document).ready(function () {
            const $doc = $(printWindow.document);

            $doc.find('head').append('<title>Print Preview</title>');
            $doc.find('body').append('<h1>Print Preview</h1>');

            const table = $('<table border="1">').append(
                '<thead><tr><th>Name</th><th>Address</th><th>City</th><th>Post Code</th><th>Country</th></tr></thead>'
            );

            const tbody = $('<tbody></tbody>').append(`
            <tr>
                <td>${props.data.name}</td>
                <td>${props.data.address}</td>
                <td>${props.data.city}</td>
                <td>${props.data.postcode}</td>
                <td>${props.data.country}</td>
            </tr>
        `);

            table.append(tbody);
            $doc.find('body').append(table);

            printWindow.focus();
            printWindow.print();
        });
    };

    const handleClick = () => {
        alert('Function not implemented yet');
    }

    return (
        <div>
            <img className="view-button" src={viewImage} style={{ width: '20px', height: '20px', padding: '0px 10px' }} onClick={print} />
            <img className="edit-button" src={editImage} style={{ width: '20px', height: '20px', padding: '0px 10px' }} onClick={handleClick} />
            <img className="delete-button" src={deleteImage} style={{ width: '20px', height: '20px', padding: '0px 10px' }} onClick={handleClick} />
        </div>
    );
};



export default ActionButton;