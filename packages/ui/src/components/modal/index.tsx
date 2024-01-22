import { MouseEvent } from 'react';
import { XCircle } from '@emotion-icons/bootstrap';
import { css } from '@emotion/react';
import { ModalBackground, ModalContainer } from './styles';
import { TModal } from './types';

const Modal: TModal = ({ children, closeHandler }) => {
    const stopPropagation = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <ModalBackground onClick={closeHandler}>
            <ModalContainer onClick={stopPropagation}>
                <XCircle
                    css={css`
                        width: 24px;
                        height: 24px;
                        cursor: pointer;
                    `}
                    onClick={closeHandler}
                />
                {children}
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;
