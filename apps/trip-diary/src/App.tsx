import { Button, ButtonType } from 'ui';
import { css } from '@emotion/react';

function App() {
    return (
        <div>
            <div>오늘 저녁은 뭐 먹을까?</div>
            <Button type={ButtonType.primary}>
                <div
                    css={css`
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-weight: 500;
                        color: white;
                    `}>
                    Start!
                </div>
            </Button>
        </div>
    );
}

export default App;
