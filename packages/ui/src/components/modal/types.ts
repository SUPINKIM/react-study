import { FC, ReactNode } from 'react';

export interface IModalProps {
    children: ReactNode;
    closeHandler: () => void;
}

export type TModal = FC<IModalProps>;
