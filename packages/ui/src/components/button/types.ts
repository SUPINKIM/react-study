import { ColorPalette } from '../color';

export enum ButtonSize {
    SMALL,
    MEDIUM,
    LARGE
}

export enum ButtonVariant {
    FILLED,
    OUTLINED,
    TEXT
}

export enum ButtonShape {
    RECTANGLE,
    ROUND
}

export interface IButtonProps {
    variant: ButtonVariant;
    color: ColorPalette;
    size: ButtonSize;
    shape: ButtonShape;
}
