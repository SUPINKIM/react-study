import { css } from '@emotion/react';
import { TPropsWithChildren } from '@/types';

const CardFooter: TPropsWithChildren = ({ children }) => {
    return (
        <div
            css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 8px;
                column-gap: 6px;
            `}>
            {children}
        </div>
    );
};

export default CardFooter;
