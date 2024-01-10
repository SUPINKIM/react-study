export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary',
    text = 'text'
}

export interface IButtonStyle {
    width: string;
    height: string;
    borderRadius: string;
}

export interface IButtonProps {
    colors?: string; // hex
    type: ButtonType;
    style?: Partial<IButtonStyle>;
}
