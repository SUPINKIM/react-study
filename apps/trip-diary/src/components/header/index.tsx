import { Link } from 'react-router-dom';

import { css } from '@emotion/react';

import { Button, ColorTypes, ButtonTypes } from '@my-blog/ui';
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
            <div
                css={css`
                    display: flex;
                    column-gap: 12px;
                `}>
                <Button.outlined
                    shape={ButtonTypes.ButtonShape.ROUND}
                    size={ButtonTypes.ButtonSize.SMALL}
                    color={ColorTypes.BLUE}>
                    <span
                        css={css`
                            font-weight: 600;
                        `}>
                        일기 쓰기
                    </span>
                </Button.outlined>
                <AccountIcon />
            </div>
        </HeaderContainer>
    );
};

export default Header;
