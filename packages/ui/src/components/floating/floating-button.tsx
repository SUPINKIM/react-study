import { FloatingOptionItem } from '@components/floating/styles';
import { TPropsWithChildren } from '@/types';

interface ISelectOptionProps {
    onClick: () => void;
}

const FloatingButton: TPropsWithChildren<ISelectOptionProps> = ({
    onClick,
    children
}) => {
    return (
        <FloatingOptionItem onClick={() => onClick()}>
            {children}
        </FloatingOptionItem>
    );
};

export default FloatingButton;
