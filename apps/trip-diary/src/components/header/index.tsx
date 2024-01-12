import { Link } from 'react-router-dom';

import { css } from '@emotion/react';

import { ColorTypes } from '@my-blog/ui';
import { HeaderContainer, AccountIcon } from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <Link
                to='/'
                css={css`
                    all: unset;
                    font-size: 24px;
                    font-weight: 600;
                    color: ${ColorTypes.GREEN};
                    cursor: pointer;
                    &:hover {
                        color: ${ColorTypes.GRAY};
                    }
                `}>
                Trip Diary
            </Link>
            <AccountIcon />
        </HeaderContainer>
    );
};

export default Header;
