import { Global } from '@emotion/react';
import { TPropsWithChildren } from './types';

const GlobalStyle: TPropsWithChildren = ({ children }) => {
    return (
        <div>
            <Global
                styles={{
                    '*': {
                        margin: 0,
                        boxSizing: 'border-box',
                        fontSize: '14px'
                    },
                    '#root': {
                        width: '100vw',
                        height: '100vh'
                    },
                    '#root > div': {
                        width: '100%',
                        height: '100%'
                    }
                }}
            />
            {children}
        </div>
    );
};

export default GlobalStyle;
