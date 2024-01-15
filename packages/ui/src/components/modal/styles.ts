import styled from '@emotion/styled';
import { ColorPalette, ColorPaletteMapper } from '../color';

export const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${ColorPaletteMapper[ColorPalette.GRAY][60]};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    background-color: ${ColorPaletteMapper[ColorPalette.WHITE][100]};
    width: 100%;
    height: 100%;
    margin: 300px 400px;
    border-radius: 16px;
`;
