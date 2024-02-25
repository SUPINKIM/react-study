import { createPortal } from 'react-dom';
import React, { useMemo } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { Modal as CommonModal } from '@my-blog/ui';
import { modalOpenState, modalComponentState } from '@store/modal';
import { ModalComponentsName } from '@/store/modal/types';

const ModalComponents = {
    [ModalComponentsName.LOADING]: React.lazy(
        () => import('@components/loading')
    ),
    [ModalComponentsName.LIST]: React.lazy(() => import('@components/list'))
};

const Modal = () => {
    const [isOpen, toggleOpen] = useRecoilState(modalOpenState);
    const [component] = useRecoilState(modalComponentState);
    const resetComponent = useResetRecoilState(modalComponentState);

    const ModalContents = useMemo(
        () => ModalComponents[component],
        [component]
    );

    const closeModal = () => {
        toggleOpen(!isOpen);
        resetComponent();
    };

    return (
        isOpen &&
        component &&
        createPortal(
            <CommonModal closeHandler={closeModal}>
                <ModalContents />
            </CommonModal>,
            document.getElementById('portal')!
        )
    );
};

export default Modal;
