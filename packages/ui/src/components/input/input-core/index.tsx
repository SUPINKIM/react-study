import { forwardRef } from 'react';
import { ForwardRefExoticComponentWithId } from '@/types';
import { InputID } from '../types';
import { InputCoreProps } from './type';
import { InputContainer } from './styles';

export const InputCore: ForwardRefExoticComponentWithId<InputCoreProps> =
    forwardRef<HTMLInputElement, InputCoreProps>((props, ref) => {
        return (
            <InputContainer
                onChange={props.onChange}
                value={props.value}
                ref={ref}
            />
        );
    });

InputCore.id = InputID.Core;
InputCore.displayName = InputID.Core;
