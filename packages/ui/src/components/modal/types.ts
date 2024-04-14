import { FC, ReactNode } from 'react';

export interface IModalProps {
    children: ReactNode;
    onCloseModal: () => void;
    onClickConfirm: () => void;
    onClickCancel: () => void;
}

export type TModal = FC<IModalProps>;
