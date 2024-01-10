import { Button, ButtonTypes, ColorTypes } from '@my-blog/ui';

function App() {
    return (
        <>
            <Button.filled
                color={ColorTypes.ORANGE}
                size={ButtonTypes.ButtonSize.SMALL}
                shape={ButtonTypes.ButtonShape.RECTANGLE}>
                button1
            </Button.filled>
            <div>여행 다이어리</div>
        </>
    );
}

export default App;
