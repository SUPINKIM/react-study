import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ColorPalette, ColorPaletteMapper } from '../color';
import { ButtonShape, ButtonSize, IButtonProps } from './types';

const ButtonSizeMapper = {
    [ButtonSize.SMALL]: css({
        padding: '8px 6px',
        height: '24px',
        width: '60px',
        fontSize: '12px'
    }),
    [ButtonSize.MEDIUM]: css({
        padding: '10px 12px',
        height: '32px',
        width: '80px',
        fontSize: '14px'
    }),
    [ButtonSize.LARGE]: css({
        padding: '16px 12px',
        height: '36px',
        width: '160px',
        fontSize: '16px'
    })
};

const ButtonShapeMapper = {
    [ButtonShape.RECTANGLE]: css({
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '6px'
    }),
    [ButtonShape.ROUND]: css({
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '100px'
    })
};

export const FilledButton = styled.button<IButtonProps>(
    props => ({
        all: 'unset',
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: ColorPaletteMapper[ColorPalette.WHITE][100],
        backgroundColor: ColorPaletteMapper[props.color][60],
        cursor: 'pointer'
    }),
    props => ({ ...ButtonSizeMapper[props.size] }),
    props => ({ ...ButtonShapeMapper[props.shape] }),
    props => ({
        '&:hover': css({
            //
            backgroundColor: ColorPaletteMapper[props.color][100]
        })
    })
);

export const OutlinedButton = styled.button<IButtonProps>(
    props => ({
        all: 'unset',
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: ColorPaletteMapper[ColorPalette.WHITE][100],
        color: ColorPaletteMapper[props.color][60]
    }),
    props => ({ ...ButtonSizeMapper[props.size] }),
    props => ({ ...ButtonShapeMapper[props.shape] }),
    {
        '&:hover': css({
            //
            backgroundColor: ColorPaletteMapper[ColorPalette.GRAY][10]
        })
    }
);

export const TextButton = styled.button<IButtonProps>(
    {
        all: 'unset',
        cursor: 'pointer',
        fontWeight: 600
    },
    props => ButtonSizeMapper[props.size],
    props => ({
        color: ColorPaletteMapper[props.color][60],
        padding: 0,
        width: 0
        // height: 0
    }),
    { '&:hover': css({ textDecoration: 'underline' }) }
);
