import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';

const UnAuthLayout = () => {
    return (
        <div
            css={css`
                width: 100%;
                height: 100%;
            `}>
            <Outlet />
        </div>
    );
};

export default UnAuthLayout;
