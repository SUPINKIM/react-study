import { FC, useState } from 'react';
import { css } from '@emotion/react';
import { FloatingDefaultButton } from '@components/floating/styles';
import SelectOption from '../select/select-option';

const FloatingButtonSet: FC = () => {
    const [isShow, setShow] = useState(false);

    const clickSelectOption = () => {
        alert('click!');
    };

    return (
        <div
            css={css`
                position: fixed;
                bottom: 20px;
                right: 100px;
            `}>
            {isShow ? (
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        row-gap: 12px;
                    `}>
                    <SelectOption onClick={() => clickSelectOption()}>
                        📄
                    </SelectOption>
                    <SelectOption onClick={() => setShow(false)}>
                        ❎
                    </SelectOption>
                </div>
            ) : (
                false
            )}
            <FloatingDefaultButton onClick={() => setShow(!isShow)}>
                ✏️
            </FloatingDefaultButton>
        </div>
    );
};

export default FloatingButtonSet;
