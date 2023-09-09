import { TPropsWithChildren } from '../../types';
import { FloatingOptionItem, SelectOptionItem } from './style-button';

interface ISelectOptionProps {
    type: 'floating' | 'select';
    onClick: () => void;
}

const SelectOption: TPropsWithChildren<ISelectOptionProps> = ({
    type,
    onClick,
    children
}) => {
    return type === 'floating' ? (
        <FloatingOptionItem onClick={() => onClick()}>
            {children}
        </FloatingOptionItem>
    ) : (
        <SelectOptionItem onClick={() => onClick()}>
            {children}
        </SelectOptionItem>
    );
};

export default SelectOption;
