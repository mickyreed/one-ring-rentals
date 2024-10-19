
/**
 * Regions Context
 *
 * Regions Context class component for all pages
 *
 * FILE NAME:   RegionsContext.js
 * Location:    /src/contexts
 * Created:     19/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 */
// REFERNCE:
// https://dev.to/clickpesa/react-manage-state-using-context-api-with-usestate-or-usereducer-hooks-d5l
// https://stackoverflow.com/questions/69675357/what-is-the-proper-way-to-do-global-state
// https://www.freecodecamp.org/news/react-context-for-beginners/

import React, { createContext, useState, useEffect } from 'react';
import { fetchAPIData } from '../js/fetchAPIData';

export const RegionsContext = createContext();

export const RegionsProvider = ({ children }) => {
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadRegions = async () => {
            try {
                const regions = await fetchAPIData('/regionsData.json');
                setRegions(regions);  // Store data in state
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        loadRegions();
    }, []);

    return (
        <RegionsContext.Provider value={{ regions, loading, error }}>
            {children}
        </RegionsContext.Provider>
    );
};