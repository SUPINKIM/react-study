import { PropsWithChildren, forwardRef } from 'react';
import { ForwardRefExoticComponentWithId } from '@/types';
import { InputID } from '../types';

import {
    InputLeftElementContainer,
    InputRightElementContainer
} from './styles';

export const InputLeftElement: ForwardRefExoticComponentWithId = forwardRef<
    HTMLDivElement,
    PropsWithChildren
>((props, ref) => {
    return (
        <InputLeftElementContainer ref={ref}>
            {props.children}
        </InputLeftElementContainer>
    );
});

InputLeftElement.id = InputID.InputeLeftElement;
InputLeftElement.displayName = InputID.InputeLeftElement;

export const InputRightElement: ForwardRefExoticComponentWithId = forwardRef<
    HTMLDivElement,
    PropsWithChildren
>((props, ref) => {
    return (
        <InputRightElementContainer ref={ref}>
            {props.children}
        </InputRightElementContainer>
    );
});

InputRightElement.id = InputID.InputRightElement;
InputRightElement.displayName = InputID.InputRightElement;
