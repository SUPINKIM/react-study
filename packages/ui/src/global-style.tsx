import { Global } from '@emotion/react';
import { TPropsWithChildren } from './types';

const GlobalStyle: TPropsWithChildren = ({ children }) => {
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
                        height: '100vh'
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
