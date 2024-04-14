import { MouseEvent } from 'react';
import { XCircle } from '@emotion-icons/bootstrap';
import { css } from '@emotion/react';
import { ColorPalette } from '../color';
import Button from '../button';
import { ButtonShape, ButtonSize } from '../button/types';
import {
    ModalBackground,
    ModalContainer,
    ModalFooter,
    ModalHeader
} from './styles';
import { TModal } from './types';

const Modal: TModal = ({
    children,
    onCloseModal,
    onClickCancel,
    onClickConfirm
}) => {
    const stopPropagation = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <ModalBackground onClick={onCloseModal}>
            <ModalContainer onClick={stopPropagation}>
                <ModalHeader>
                    <XCircle
                        css={css`
                            width: 24px;
                            height: 24px;
                            cursor: pointer;
                            color: ${ColorPalette.GRAY};
                        `}
                        onClick={onCloseModal}
                    />
                </ModalHeader>
                {children}
                <ModalFooter>
                    <Button.outlined
                        width={182}
                        shape={ButtonShape.RECTANGLE}
                        color={ColorPalette.PINK}
                        size={ButtonSize.MEDIUM}
                        onClick={onClickCancel}>
                        취소
                    </Button.outlined>
                    <Button.filled
                        width={182}
                        shape={ButtonShape.RECTANGLE}
                        color={ColorPalette.PINK}
                        size={ButtonSize.MEDIUM}
                        onClick={onClickConfirm}>
                        확인
                    </Button.filled>
                </ModalFooter>
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;
