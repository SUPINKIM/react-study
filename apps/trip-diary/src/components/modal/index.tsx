import React, { useMemo } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { Modal as CommonModal } from '@my-blog/ui';
import { modalOpenState, modalComponentState } from '@store/modal';
import { ModalComponentsName } from '@/store/modal/types';

import Portal from '@/components/portal';

const ModalComponents = {
    //
    [ModalComponentsName.LIST]: React.lazy(() => import('@components/list'))
};

const Modal = () => {
    const [isOpen, toggleOpen] = useRecoilState(modalOpenState);
    const component = useRecoilValue(modalComponentState);
    const resetComponent = useResetRecoilState(modalComponentState);

    const ModalContents = useMemo(() => {
        if (!component) throw Error();
        return ModalComponents[component];
    }, [component]);

    const closeModal = () => {
        toggleOpen(!isOpen);
        resetComponent();
    };

    return (
        <Portal>
            <CommonModal closeHandler={closeModal}>
                <ModalContents />
            </CommonModal>
        </Portal>
    );
};

export default Modal;
