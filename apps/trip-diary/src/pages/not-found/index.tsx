import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { Button, ButtonTypes, ColorTypes } from '@my-blog/ui';

const NotFound = () => {
    return (
        <div
            css={css`
                width: 100%;
                height: 300px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            `}>
            <h3
                css={css`
                    font-size: 18px;
                    padding-bottom: 24px;
                `}>
                해당 페이지가 존재하지 않습니다.🥲
            </h3>
            <Link
                css={css`
                    all: unset;
                `}
                to='/'>
                <Button.filled
                    size={ButtonTypes.ButtonSize.MEDIUM}
                    color={ColorTypes.PINK}
                    shape={ButtonTypes.ButtonShape.RECTANGLE}>
                    돌아가기
                </Button.filled>
            </Link>
        </div>
    );
};

export default NotFound;
