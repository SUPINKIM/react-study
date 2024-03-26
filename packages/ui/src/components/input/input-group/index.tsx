import { Children, PropsWithChildren, isValidElement, useMemo } from 'react';

import { css } from '@emotion/react';
import { ColorPaletteMapper } from '@/components/color';
import { InputID } from '../types';

export const InputGroup = ({ children }: PropsWithChildren) => {
    const childrenArray = useMemo(
        () => Children.toArray(children).filter(child => isValidElement(child)),
        [children]
    );

    return (
        <div
            css={css`
                display: flex;
                align-items: center;
                column-gap: 8px;
                border: 1px solid ${ColorPaletteMapper.gray[60]};
                width: 200px;
                height: 48px;
                border-radius: 6px;
            `}>
            {childrenArray.find(
                child => child.type.id === InputID.InputeLeftElement
            )}
            {childrenArray.find(child => child.type.id === InputID.Core)}
            {childrenArray.find(
                child => child.type.id === InputID.InputRightElement
            )}
        </div>
    );
};
