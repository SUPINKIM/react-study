import { ColorPalette } from '../color';
export declare enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}
export declare enum ButtonVariant {
    FILLED = 'filled',
    OUTLINED = 'outlined',
    TEXT = 'text'
}
export declare enum ButtonShape {
    RECTANGLE = 'rectangle',
    ROUND = 'round'
}
export interface IButtonProps {
    color: ColorPalette;
    size: ButtonSize;
    shape: ButtonShape;
}
