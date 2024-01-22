import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import Header from '@components/header';

const MainLayout = () => {
    return (
        <div
            css={css`
                width: 100%;
                height: 100%;
            `}>
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;
