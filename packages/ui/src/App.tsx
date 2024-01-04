import { css } from '@emotion/react';

import {
    ButtonVariant,
    ButtonShape,
    ButtonSize
} from '@components/button/types';

import { ColorPalette } from '@components/color';
import Button from '@components/button';

function App() {
    return (
        <>
            <div
                css={css`
                    display: flex;
                    column-gap: 10px;
                `}>
                <Button
                    variant={ButtonVariant.FILLED}
                    color={ColorPalette.ORANGE}
                    size={ButtonSize.SMALL}
                    shape={ButtonShape.ROUND}>
                    button
                </Button>
                <Button
                    variant={ButtonVariant.FILLED}
                    color={ColorPalette.PINK}
                    size={ButtonSize.MEDIUM}
                    shape={ButtonShape.ROUND}>
                    button
                </Button>
                <Button
                    variant={ButtonVariant.FILLED}
                    color={ColorPalette.BLUE}
                    size={ButtonSize.LARGE}
                    shape={ButtonShape.ROUND}>
                    button
                </Button>
            </div>
        </>
    );
}

export default App;
