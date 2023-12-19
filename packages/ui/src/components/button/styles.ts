import { Interpolation, Theme } from '@emotion/react';
import { ColorPalette, ColorPaletteMapper } from '../color';
import { ButtonShape, ButtonSize, ButtonVariant, IButtonProps } from './types';

const ButtonSizeMapper: Record<ButtonSize, Array<Interpolation<Theme>>> = {
    [ButtonSize.SMALL]: [{ width: '20px' }, { height: '16px' }],
    [ButtonSize.MEDIUM]: [{ width: '32px' }, { height: '28px' }],
    [ButtonSize.LARGE]: [{ width: '48px' }, { height: '40px' }]
};

const ButtonShapeMapper: Record<ButtonShape, Array<Interpolation<Theme>>> = {
    [ButtonShape.RECTANGLE]: [
        { 'border-width': '1px' },
        { 'border-style': 'solid' }
    ],
    [ButtonShape.ROUND]: [
        { 'border-width': '1px' },
        { 'border-style': 'solid' },
        { 'border-radius': '6px' }
    ]
};

const ButtonVariantMapper: Record<
    ButtonVariant,
    Array<Interpolation<Theme>>
> = {
    [ButtonVariant.FILLED]: [
        { color: ColorPaletteMapper[ColorPalette.WHITE][100] }
    ],
    [ButtonVariant.OUTLINED]: [
        { color: ColorPaletteMapper[ColorPalette.BALCK][100] }
    ],
    [ButtonVariant.TEXT]: [
        { color: ColorPaletteMapper[ColorPalette.BALCK][100] },
        { '&:hover': { 'text-decoration': 'underline' } }
    ]
};

export const createButtonStyles = ({
    size,
    variant,
    shape,
    color
}: IButtonProps) => {
    const defaultStyle: Array<Interpolation<Theme>> = [{ all: 'unset' }];

    defaultStyle.push(...ButtonSizeMapper[size]);
    defaultStyle.push(...ButtonVariantMapper[variant]);

    if (variant !== ButtonVariant.TEXT) {
        defaultStyle.push(...ButtonShapeMapper[shape]);
        defaultStyle.push({ 'border-color': ColorPalette[color][60] });
    }

    if (variant === ButtonVariant.FILLED) {
        defaultStyle.push({ 'background-color': ColorPalette[color][60] });
    }

    console.log(defaultStyle);

    return defaultStyle;
};
