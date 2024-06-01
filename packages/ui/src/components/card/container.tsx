import { css } from '@emotion/react';
import { TPropsWithChildren } from '@/types';
import { ColorPalette, ColorPaletteMapper } from '../color';
import { CardContainerProps } from './types';

const CardContainer: TPropsWithChildren<CardContainerProps> = ({
    children,
    ...args
}) => {
    return (
        <div
            css={css({
                display: 'grid',
                gridColumn: '1',
                borderRadius: '10px',
                padding: '16px 12px',
                background: ColorPaletteMapper[ColorPalette.WHITE][100],
                boxShadow:
                    '0 2px 4px 0 rgba(0,0,0,0.2), 0 4px 16px 0 rgba(0,0,0,0.19)',
                ...args
            })}>
            {children}
        </div>
    );
};

export default CardContainer;
