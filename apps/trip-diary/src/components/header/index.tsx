import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

import { Button, ColorTypes, ButtonTypes } from '@my-blog/ui';
import { HeaderContainer, AccountIcon, Logo } from './styles';

const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <Logo to='/'>Trip Diary</Logo>
            <div
                css={css`
                    display: flex;
                    column-gap: 12px;
                `}>
                <Button.outlined
                    shape={ButtonTypes.ButtonShape.RECTANGLE}
                    size={ButtonTypes.ButtonSize.SMALL}
                    color={ColorTypes.GRAY}>
                    <span
                        css={css`
                            font-weight: 600;
                        `}>
                        일기 쓰기
                    </span>
                </Button.outlined>
                <AccountIcon onClick={() => navigate('/login')} />
            </div>
        </HeaderContainer>
    );
};

export default Header;
