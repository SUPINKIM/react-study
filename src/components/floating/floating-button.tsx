import { FC, useState } from 'react';
import { css } from '@emotion/react';
import SelectOption from '../select/select-option';
import { FloatingDefaultButton } from '../select/style-button';

const FloatingButton: FC = () => {
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
                    <SelectOption
                        type='floating'
                        onClick={() => clickSelectOption()}>
                        📄
                    </SelectOption>
                    <SelectOption
                        type='floating'
                        onClick={() => setShow(false)}>
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

export default FloatingButton;
