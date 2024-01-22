import { css } from '@emotion/react';

import { Button, ColorTypes, ButtonTypes } from '@my-blog/ui';
import { HeaderContainer, AccountIcon, Logo } from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo to='/'>Trip Diary</Logo>
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
