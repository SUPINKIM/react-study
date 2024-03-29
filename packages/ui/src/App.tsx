import { css } from '@emotion/react';

import { ButtonShape, ButtonSize } from '@components/button/types';

import { ColorPalette } from '@components/color';
import Button from '@components/button';

function App() {
    return (
        <>
            <div
                css={css`
                    display: flex;
                    column-gap: 10px;
                    padding-top: 12px;
                    padding-left: 10px;
                `}>
                <Button.filled
                    color={ColorPalette.ORANGE}
                    size={ButtonSize.SMALL}
                    shape={ButtonShape.RECTANGLE}>
                    button1
                </Button.filled>
                <Button.outlined
                    color={ColorPalette.PINK}
                    size={ButtonSize.MEDIUM}
                    shape={ButtonShape.ROUND}>
                    button2
                </Button.outlined>
                <Button.text
                    color={ColorPalette.BLUE}
                    size={ButtonSize.LARGE}
                    shape={ButtonShape.ROUND}>
                    button3
                </Button.text>
            </div>
            {/* <Drawer /> */}
        </>
    );
}

export default App;
