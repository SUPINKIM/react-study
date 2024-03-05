import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }: PropsWithChildren) => {
    return createPortal(children, document.getElementById('portal')!);
};

export default Portal;