import { TPropsWithChildren } from '@/types';
import { IButtonProps } from './types';
import { createButtonStyles } from './styles';

const Button: TPropsWithChildren<IButtonProps> = ({ children, ...props }) => {
    return <button css={createButtonStyles(props)}>{children}</button>;
};

export default Button;
