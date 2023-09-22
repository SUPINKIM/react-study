import { FloatingOptionItem } from '@components/floating/styles';
import { TPropsWithChildren } from '@/types';

interface ISelectOptionProps {
    onClick: () => void;
}

const SelectOption: TPropsWithChildren<ISelectOptionProps> = ({
    onClick,
    children
}) => {
    return (
        <FloatingOptionItem onClick={() => onClick()}>
            {children}
        </FloatingOptionItem>
    );
};

export default SelectOption;
