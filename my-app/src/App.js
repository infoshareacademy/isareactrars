import { createContext, useState } from 'react';
import { Navigation } from './Navigation';
import { Content } from './Content';

export const LanguageContext = createContext('pl');

function App() {
    const [lang, setLang] = useState('pl');

  return (
    <LanguageContext.Provider value={lang}>
        <Navigation />
        <div>
            <button onClick={() => setLang('pl')}>pl</button>
            <button onClick={() => setLang('en')}>en</button>
        </div>
        <Content />
    </LanguageContext.Provider>
  );
}

export default App;
