import React, { useState, useEffect } from 'react';
import TreeMenu from './TreeViewMenu';
import CustomerTable from './CustomerTable';

const HomeTab = () => {
    const sampleData = [
        {
            id: 1,
            name: 'John Doe',
            address: '123 Elm Street',
            city: 'Springfield',
            postcode: '62701',
            country: 'USA'
        },
        {
            id: 2,
            name: 'Jane Smith',
            address: '456 Oak Avenue',
            city: 'Metropolis',
            postcode: '10001',
            country: 'USA'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            address: '789 Pine Road',
            city: 'Gotham',
            postcode: '90001',
            country: 'GBR'
        },
        {
            id: 4,
            name: 'Bob Brown',
            address: '101 Maple Lane',
            city: 'Star City',
            postcode: '20001',
            country: 'CAN'
        }
    ];

    const [data, setData] = useState([]);
    const gridRef = React.createRef();
    const [selectedCountry, setSelectedCountry] = useState('');

    const SelectCountry = (country) => {
        setSelectedCountry(country);
    }

    useEffect(() => {
        if (selectedCountry) {
            fetchData();
        }
    }, [selectedCountry]);

    const fetchData = async () => {
        try {
            const FilteredData = sampleData.filter(item =>
                item.country.includes(selectedCountry)
            );
            setData(FilteredData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h2>Home Tab</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="Tree-View-Menu" style={{ flex: 1 }}>
                    <div className="treeView">
                        <TreeMenu onCountrySelect={SelectCountry} />
                    </div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height:'500px', margin: '0px 20px', padding: '0px 60px', border: '10px solid LightGray' }}>
                    <h2>Customer Details</h2>
                    <CustomerTable data={data} gridRef={gridRef} />
                </div>
            </div>
        </div>
    );
};

export default HomeTab;