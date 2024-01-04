import { Interpolation, Theme } from '@emotion/react';
import { ColorPalette, ColorPaletteMapper } from '../color';
import { ButtonShape, ButtonSize, ButtonVariant, IButtonProps } from './types';

const ButtonSizeMapper: Record<ButtonSize, Array<Interpolation<Theme>>> = {
    [ButtonSize.SMALL]: [
        { padding: '8px 6px' },
        { height: '24px' },
        { width: '56px' }
    ],
    [ButtonSize.MEDIUM]: [
        { padding: '10px 12px' },
        { height: '32px' },
        { width: '80px' }
    ],
    [ButtonSize.LARGE]: [
        { padding: '16px 12px' },
        { height: '36px' },
        { width: '160px' }
    ]
};

const ButtonShapeMapper: Record<ButtonShape, Array<Interpolation<Theme>>> = {
    [ButtonShape.RECTANGLE]: [{ borderWidth: '1px' }, { borderStyle: 'solid' }],
    [ButtonShape.ROUND]: [
        { borderWidth: '1px' },
        { borderStyle: 'solid' },
        { borderRadius: '6px' }
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
    const defaultStyle: Array<Interpolation<Theme>> = [
        { all: 'unset' },
        { cursor: 'pointer' },
        { display: 'flex' },
        { justifyContent: 'center' },
        { alignItems: 'center' }
    ];

    defaultStyle.push(...ButtonSizeMapper[size]);
    defaultStyle.push(...ButtonVariantMapper[variant]);

    if (variant !== ButtonVariant.TEXT) {
        defaultStyle.push(...ButtonShapeMapper[shape]);
        defaultStyle.push({ borderColor: ColorPaletteMapper[color][60] });
    }

    if (variant === ButtonVariant.FILLED) {
        defaultStyle.push({ backgroundColor: ColorPaletteMapper[color][60] });
    }

    return defaultStyle;
};
