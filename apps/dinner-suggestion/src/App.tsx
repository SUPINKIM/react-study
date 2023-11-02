import { Button } from 'ui';
import { css } from '@emotion/react';

function App() {
    return (
        <div>
            <div>오늘 저녁은 뭐 먹을까?</div>
            <Button type='primary'>
                <div
                    css={css`
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        line-height: 12px;
                    `}>
                    Start!
                </div>
            </Button>
        </div>
    );
}

export default App;
