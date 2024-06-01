import { PropsWithChildren } from 'react';
import { ButtonVariant, ButtonProps } from './types';

import { FilledButton, OutlinedButton, TextButton } from './styles';

type ButtonPropsType = {
    [key in ButtonVariant.FILLED | ButtonVariant.OUTLINED]: (
        props: PropsWithChildren<ButtonProps>
    ) => JSX.Element;
} & {
    [key in ButtonVariant.TEXT]: (
        props: PropsWithChildren<Omit<ButtonProps, 'shape'>>
    ) => JSX.Element;
};

const Button: ButtonPropsType = {
    [ButtonVariant.FILLED]: ({ children, ...props }) => (
        <FilledButton {...props}>{children}</FilledButton>
    ),
    [ButtonVariant.OUTLINED]: ({ children, ...props }) => (
        <OutlinedButton {...props}>{children}</OutlinedButton>
    ),
    [ButtonVariant.TEXT]: ({ children, ...props }) => (
        <TextButton {...props}>{children}</TextButton>
    )
};

export default Button;
