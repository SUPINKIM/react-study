import { SelectOptionItem } from '@components/select/styles';
import { TPropsWithChildren } from '@/types';

interface SelectOptionProps {
    onClick: () => void;
}

const SelectOption: TPropsWithChildren<SelectOptionProps> = ({
    onClick,
    children
}) => {
    return (
        <SelectOptionItem onClick={() => onClick()}>
            {children}
        </SelectOptionItem>
    );
};

export default SelectOption;
