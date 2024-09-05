import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import ActionButton from './ActionButton'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


const CustomerTable = ({ data, gridRef }) => { 

    const [columnDefs] = useState([
        { headerName: 'Name', field: 'name', sortable: true, filter: true, width: "160px" },
        { headerName: 'Address', field: 'address', sortable: true, filter: true, },
        { headerName: 'City', field: 'city', sortable: true, filter: true, width: "90px" },
        { headerName: 'Post Code', field: 'postcode', sortable: true, filter: true, width: "90px" },
        { headerName: 'Country', field: 'country', sortable: true, filter: true, width: "110px" },
        { headerName: 'Action', field: '', cellRenderer: ActionButton },
    ]);

    return (
        <div className="ag-theme-alpine" style={{ height: '400px', width: '800px' }}>
            <AgGridReact id="CustomerTable"
                ref={gridRef}
                rowData={data}
                columnDefs={columnDefs}
                pagination={true}
                paginationPageSize={20}
            />
        </div>
    );
};

export default CustomerTable;