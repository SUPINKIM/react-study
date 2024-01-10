import React from 'react';
import ReactDom from 'react-dom/client';

import App from './App';
import GlobalStyle from './global-style';

ReactDom.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyle>
            <App />
        </GlobalStyle>
    </React.StrictMode>
);
