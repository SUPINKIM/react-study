import { FC } from 'react';
import { css } from '@emotion/react';

const SelectBox: FC = () => {
    return (
        <div>
            <div
                css={css`
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #3f3f3f;
                    opacity: 0.8;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.5s ease-out;
                    :hover {
                        transform: scale(0.96) rotate(180deg);
                    }
                `}>
                ✏️
            </div>
        </div>
    );
};

export default SelectBox;
