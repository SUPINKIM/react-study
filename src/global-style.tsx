import type { PropsWithChildren } from 'react';
import { Global } from '@emotion/react';

const GlobalStyle = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <Global styles={{}} />
            {children}
        </div>
    );
};

export default GlobalStyle;
