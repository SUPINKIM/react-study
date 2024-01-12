import { ReactNode } from 'react';
import { FC } from 'react';
import { Global } from '@emotion/react';

const GlobalStyle: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div>
            <Global
                styles={{
                    '*': {
                        margin: '0',
                        padding: '0',
                        boxSizing: 'border-box',
                        fontSize: '14px'
                    },
                    '#root': {
                        padding: '0',
                        width: '100vw',
                        height: '100vh',
                        minWidth: '320px'
                    },
                    '#root > div': {
                        width: '100%',
                        height: '100%',
                        position: 'relative'
                    }
                }}
            />
            {children}
        </div>
    );
};

export default GlobalStyle;
