/**
 * Language Context
 *
 * Language Context class component for all pages
 *
 * FILE NAME:   LanguageContext.js
 * Location:    /src/contexts
 * Created:     20/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 */

import { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language

    return (
        <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;