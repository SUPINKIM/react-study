import { ColorPalette } from '../color';

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

export enum ButtonVariant {
    FILLED = 'filled',
    OUTLINED = 'outlined',
    TEXT = 'text'
}

export enum ButtonShape {
    RECTANGLE = 'rectangle',
    ROUND = 'round'
}

export interface IButtonProps {
    color: ColorPalette;
    size: ButtonSize;
    shape: ButtonShape;
    onClick?: () => void;
}
