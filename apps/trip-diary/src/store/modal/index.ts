import { atom } from 'recoil';

export const ModalStateKey = {
    OPEN_STATE: 'OPEN',
    PROPS: 'PROPS'
};

export const modalOpenState = atom<boolean>({
    key: ModalStateKey.OPEN_STATE,
    default: false
});

export const modalPropsState = atom<Record<string, never>>({
    key: ModalStateKey.PROPS,
    default: {}
});
