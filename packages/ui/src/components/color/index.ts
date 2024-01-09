export enum ColorPalette {
    RED = 'red',
    GREEN = 'green',
    BLUE = 'blue',
    YELLOW = 'yellow',
    ORANGE = 'orange',
    PINK = 'pink',
    GRAY = 'gray',
    BALCK = 'black',
    WHITE = 'white'
}

export const ColorPaletteMapper: Record<
    ColorPalette,
    Record<number, string>
> = {
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
    [ColorPalette.ORANGE]: {
        60: '#FF6C22',
        100: '#E55604'
    },
    [ColorPalette.BLUE]: { 60: '#3559E0' },
    [ColorPalette.GRAY]: {
        10: '#F0EEED',
        20: '#E5E1DA',
        60: '#A9A9A9'
    },
    [ColorPalette.GREEN]: {
        40: '#5BB318',
        60: '#2B7A0B'
    },
    [ColorPalette.WHITE]: {
        60: '#FFFFFF',
        100: '#FFFFFF'
    }
};
