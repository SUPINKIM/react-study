import { SelectOptionItem } from '@components/select/styles';
import { TPropsWithChildren } from '@/types';

interface ISelectOptionProps {
    onClick: () => void;
}

const SelectOption: TPropsWithChildren<ISelectOptionProps> = ({
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
