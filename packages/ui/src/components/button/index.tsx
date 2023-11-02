import { css } from '@emotion/react';
import { ButtonType, IButtonProps } from './types';
import { TPropsWithChildren } from '@/types';

const Button: TPropsWithChildren<IButtonProps> = ({
    colors,
    type,
    style,
    children
}) => {
    const defaultStyle = {
        width: style?.width ?? '66px',
        height: style?.height ?? '32px',
        borderRadius: style?.borderRadius ?? '8px',
        cursor: 'pointer'
    };

    const typeMapper = {
        [ButtonType.primary]: css({
            backgroundColor: colors ?? '#e55039',
            ':hover': { backgroundColor: '#ff5252' },
            border: '0px',
            ...defaultStyle
        }),
        [ButtonType.secondary]: css({
            backgroundColor: 'white',
            borderWidth: '1px',
            borderColor: colors ?? '#e55039',
            ':hover': { backgroundColor: '#ff7979' },
            ...defaultStyle
        }),
        [ButtonType.text]: css({
            size: '14px',
            color: '#3d3d3d',
            ':hover': { textDecorationLine: 'underline' }
        })
    };

    return <button css={typeMapper[type]}>{children}</button>;
};

export default Button;
