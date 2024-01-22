import styled from '@emotion/styled';
import { ColorPalette, ColorPaletteMapper } from '../color';

export const ModalBackground = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const ModalContainer = styled.div`
    background-color: ${ColorPaletteMapper[ColorPalette.WHITE][100]};
    width: 100%;
    height: 100%;
    max-width: 480px;
    max-height: 600px;
    magin: 16px;
    border-radius: 16px;
    opacity: 1;
    position: relative;
    padding: 16px;
`;

// export const ModalCloseButton = styled(XButton)`
//     color: ${ColorTypes.BALCK};
//     width: 24px;
//     height: 24px;
// `;
