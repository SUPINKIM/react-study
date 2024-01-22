import { createPortal } from 'react-dom';
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import { Modal as CommonModal } from '@my-blog/ui';
import { modalOpenState } from '@store/modal';

const Modal = ({ children }: { children: ReactNode }) => {
    const [isOpen, toggleOpen] = useRecoilState(modalOpenState);
    return (
        isOpen &&
        createPortal(
            <CommonModal closeHandler={() => toggleOpen(!isOpen)}>
                {children}
            </CommonModal>,
            document.getElementById('portal')!
        )
    );
};

export default Modal;
