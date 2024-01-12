import { useEffect } from 'react';
import { Application } from '@splinetool/runtime';
import { css } from '@emotion/react';

const InteractionHome = () => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', '1600');
    canvas.setAttribute('height', '1200');

    const showModal = (event: MouseEvent) => {
        if (event.clientY > 200 && event.clientY < 380) {
            alert('메뉴 보여주기');
        }
    };

    useEffect(() => {
        const app = new Application(canvas);
        app.load(
            'https://prod.spline.design/2Puho-XOYfnaGiFt/scene.splinecode'
        );

        document.getElementById('canvas-container')?.appendChild(canvas);
        canvas.addEventListener('click', showModal);

        return () => {
            canvas.removeEventListener('click', showModal);
        };
    }, []);

    return (
        <div
            id='canvas-container'
            css={css`
                width: fit-content;
            `}
        />
    );
};

export default InteractionHome;
