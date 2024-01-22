import { FC, useEffect } from 'react';
import { Application } from '@splinetool/runtime';
import { css } from '@emotion/react';

const InteractionHome: FC<{ handler: () => void }> = ({ handler }) => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', '1000');
    canvas.setAttribute('height', '800');

    const showModal = () => {
        handler();
    };

    useEffect(() => {
        const app = new Application(canvas);
        app.load(
            'https://prod.spline.design/2Puho-XOYfnaGiFt/scene.splinecode'
        );

        document.getElementById('canvas-container')?.appendChild(canvas);
        canvas.addEventListener('dblclick', showModal);

        return () => {
            canvas.removeEventListener('dblclick', showModal);
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
