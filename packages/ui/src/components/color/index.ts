export enum ColorPalette {
    RED,
    GREEN,
    BLUE,
    YELLOW,
    ORANGE,
    PINK,
    GRAY,
    BALCK,
    WHITE
}

export const ColorPaletteMapper = {
    [ColorPalette.PINK]: { 60: '#DA0C81' },
    [ColorPalette.BALCK]: {
        60: '#222222',
        100: '#191919'
    },
    [ColorPalette.RED]: { 60: '#B80000' },
    [ColorPalette.YELLOW]: {
        10: '#FFF78A',
        40: '#FFE382',
        60: '#F8DE22'
    },
    [ColorPalette.ORANGE]: { 60: '#FF6C22' },
    [ColorPalette.BLUE]: { 60: '#3559E0' },
    [ColorPalette.GRAY]: { 60: '#A9A9A9' },
    [ColorPalette.GREEN]: {
        40: '#5BB318',
        60: '#2B7A0B'
    },
    [ColorPalette.WHITE]: {
        60: '#FFFFFF',
        100: '#FFFFFF'
    }
};
