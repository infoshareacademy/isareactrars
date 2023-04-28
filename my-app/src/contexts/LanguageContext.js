import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext('pl');

export const LanguageContextProvider = ({ children }) => {
    const [lang, setLang] = useState('en');

    return <LanguageContext.Provider value={
        {
            lang,
            setLang
        }
    }>
        {children}
    </LanguageContext.Provider>
}

export const useLanguageContext = () => useContext(LanguageContext);