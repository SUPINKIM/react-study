import { atom } from 'recoil';
import { ModalComponentsName } from './types';

export const ModalStateKey = {
    OPEN_STATE: 'OPEN',
    PROPS: 'PROPS',
    COMPONENT: 'COMPONENT'
};

export const modalOpenState = atom<boolean>({
    key: ModalStateKey.OPEN_STATE,
    default: false
});

export const modalPropsState = atom<Record<string, never>>({
    key: ModalStateKey.PROPS,
    default: {}
});

export const modalComponentState = atom<ModalComponentsName>({
    key: ModalStateKey.COMPONENT,
    default: ModalComponentsName.LOADING
});
