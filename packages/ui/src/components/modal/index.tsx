import { MouseEvent } from 'react';
import { XCircle } from '@emotion-icons/bootstrap';
import { css } from '@emotion/react';
import { ColorPalette } from '../color';
import { ModalBackground, ModalContainer, ModalHeader } from './styles';
import { TModal } from './types';

const Modal: TModal = ({ children, closeHandler }) => {
    const stopPropagation = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <ModalBackground onClick={closeHandler}>
            <ModalContainer onClick={stopPropagation}>
                <ModalHeader>
                    <XCircle
                        css={css`
                            width: 24px;
                            height: 24px;
                            cursor: pointer;
                            color: ${ColorPalette.GRAY};
                        `}
                        onClick={closeHandler}
                    />
                </ModalHeader>
                {children}
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;
