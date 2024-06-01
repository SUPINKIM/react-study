import { css } from '@emotion/react';

import { ButtonShape, ButtonSize } from '@components/button/types';

import { ColorPalette } from '@components/color';
import Button from '@components/button';
import { CardContainer, CardFooter, CardHeader } from './components/card';

function App() {
    return (
        <>
            <div
                css={css`
                    display: flex;
                    column-gap: 10px;
                    padding-top: 12px;
                    padding-left: 10px;
                    margin-bottom: 20px;
                `}>
                <Button.filled
                    width='100px'
                    color={ColorPalette.ORANGE}
                    size={ButtonSize.SMALL}
                    shape={ButtonShape.RECTANGLE}>
                    button1
                </Button.filled>
                <Button.outlined
                    width='120px'
                    height='32px'
                    color={ColorPalette.PINK}
                    size={ButtonSize.MEDIUM}
                    shape={ButtonShape.ROUND}>
                    button2
                </Button.outlined>
                <Button.text
                    color={ColorPalette.BLUE}
                    size={ButtonSize.LARGE}>
                    button3
                </Button.text>
            </div>
            <CardContainer
                width='320px'
                height='180px'>
                <CardHeader
                    title='수빈카드'
                    description='이건 수빈 카드에요'
                />
                <CardFooter>
                    <Button.filled
                        shape={ButtonShape.ROUND}
                        size={ButtonSize.SMALL}
                        width='100%'
                        height='30px'
                        color={ColorPalette.BALCK}>
                        확인
                    </Button.filled>
                </CardFooter>
            </CardContainer>
        </>
    );
}

export default App;
