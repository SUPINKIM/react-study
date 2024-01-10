import { TReactElementsWithChildren } from '@/types';
import { ButtonVariant, IButtonProps } from './types';

import { FilledButton, OutlinedButton, TextButton } from './styles';

const Button: TReactElementsWithChildren<ButtonVariant, IButtonProps> = {
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
