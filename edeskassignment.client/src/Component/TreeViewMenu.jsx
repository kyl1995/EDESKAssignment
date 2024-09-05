import React, { useEffect, useState } from 'react';
import { Treebeard, decorators } from 'react-treebeard';
import { animations } from 'react-treebeard';
import './TreeViewMenu.css';

const TreeMenu = ({ onCountrySelect }) => {
    const [data, setData] = useState([]);
    const [cursor, setCursor] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(countries => {
                const treeData = formatCountriesToTree(countries);
                setData(treeData);
            });
    }, []);

    const formatCountriesToTree = (countries) => {
        const regions = {};
        countries.forEach(country => {
            const region = country.region || 'Other';
            const subregion = country.subregion || 'Other';
            const shortCode = country.cca3 || country.name.common;

            if (!regions[region]) {
                regions[region] = { name: region, children: {} };
            }

            if (!regions[region].children[subregion]) {
                regions[region].children[subregion] = { name: subregion, children: [] };
            }

            regions[region].children[subregion].children.push({
                name: shortCode,
            });
        });

        return Object.values(regions).map(region => ({
            ...region,
            children: Object.values(region.children),
        }));
    };

    const onToggle = (node, toggled) => {
        if (cursor) {
            cursor.active = false;
        }

        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }

        setCursor(node);
        setData([...data]);

        if (!node.children && onCountrySelect) {
            onCountrySelect(node.name);
        }
    };

    const CustomToggle = (props) => {
        console.log('Decorator Props:', props);
        const { style, node } = props;
        return (
            <div style={style.base}>
                {node ? (node.toggled ? '-' : '+') : 'No Node'}
            </div>
        );
    };

    const customDecorators = {
        ...decorators,
        Toggle: CustomToggle,
    };

    const customTheme = {
        tree: {
            base: {
                listStyle: 'none',
                backgroundColor: '#f5f5f5',
                margin: 0,
                padding: 10,
                color: '#333',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '14px',
                width: '220px',
            },
            node: {
                base: {
                    position: 'relative',
                },
                link: {
                    cursor: 'pointer',
                    position: 'relative',
                    padding: '10px 5px',
                    display: 'block',
                },
                activeLink: {
                    background: '#b3d4fc',
                },
                toggle: {
                    base: {
                        position: 'relative',
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        marginLeft: '-5px',
                        height: '24px',
                        width: '24px',
                    },
                    wrapper: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        margin: '-7px 0 0 -7px',
                        height: '14px',
                    },
                    height: 14,
                    width: 14,
                    arrow: {
                        fill: '#418bca',
                        strokeWidth: 0,
                    },
                },
                header: {
                    base: {
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        color: '#333',
                    },
                    connector: {
                        width: '2px',
                        height: '12px',
                        borderLeft: 'solid 2px black',
                        borderBottom: 'solid 2px black',
                        position: 'absolute',
                        top: '0px',
                        left: '-21px',
                    },
                    title: {
                        lineHeight: '24px',
                        verticalAlign: 'middle',
                    },
                },
                subtree: {
                    listStyle: 'none',
                    paddingLeft: '19px',
                },
                loading: {
                    color: '#E2C089',
                },
            },
        },
    };

    return (
        <div className="tree-container">
            <Treebeard data={data} onToggle={onToggle} style={customTheme} />
        </div >
    );
};

export default TreeMenu;