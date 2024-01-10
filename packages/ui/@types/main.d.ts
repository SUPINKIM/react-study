import FloatingButtonSet from './components/floating';
import Button from './components/button';
import {
    ButtonShape,
    ButtonSize,
    ButtonVariant
} from './components/button/types';
import { ColorPalette } from './components/color';
declare const ButtonTypes: {
    ButtonShape: typeof ButtonShape;
    ButtonSize: typeof ButtonSize;
    ButtonVariant: typeof ButtonVariant;
};
declare const ColorTypes: typeof ColorPalette;
export { FloatingButtonSet, Button, ButtonTypes, ColorTypes };
