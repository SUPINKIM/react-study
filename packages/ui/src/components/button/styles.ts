import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ColorPalette, ColorPaletteMapper } from '../color';
import { ButtonShape, ButtonSize, ButtonProps } from './types';

const ButtonSizeMapper = {
    [ButtonSize.SMALL]: css({
        padding: '8px 6px',
        fontSize: '14px'
    }),
    [ButtonSize.MEDIUM]: css({
        padding: '10px 12px',
        fontSize: '16px'
    }),
    [ButtonSize.LARGE]: css({
        padding: '16px 12px',
        fontSize: '18px'
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

export const FilledButton = styled.button<ButtonProps>(
    props => ({
        all: 'unset',
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: ColorPaletteMapper[ColorPalette.WHITE][100],
        backgroundColor: ColorPaletteMapper[props.color][60],
        cursor: 'pointer',
        width: props.width || '200px',
        height: props.height || '46px'
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

export const OutlinedButton = styled.button<ButtonProps>(
    props => ({
        all: 'unset',
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: ColorPaletteMapper[ColorPalette.WHITE][100],
        color: ColorPaletteMapper[props.color][60],
        width: props.width || '200px',
        height: props.height || '46px'
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

export const TextButton = styled.button<Omit<ButtonProps, 'shape'>>(
    {
        all: 'unset',
        cursor: 'pointer',
        fontWeight: 600
    },
    props => ButtonSizeMapper[props.size],
    props => ({ color: ColorPaletteMapper[props.color][60] }),
    { '&:hover': css({ textDecoration: 'underline' }) }
);
