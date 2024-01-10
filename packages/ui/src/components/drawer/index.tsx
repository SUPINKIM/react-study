import { ArrowBarRight } from '@emotion-icons/bootstrap';
import { css } from '@emotion/react';
import { useToggle } from '@hooks/useToggle';
import { TPropsWithChildren } from '@/types';

import { DrawerContainer } from './styles';

const Drawer: TPropsWithChildren = ({ children }) => {
    const { getState, setState } = useToggle();

    return (
        <DrawerContainer isOpen={getState()}>
            <div
                css={css`
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    padding: 8px;
                `}>
                <ArrowBarRight
                    onClick={() => setState()}
                    css={css`
                        width: 24px;
                        height: 24px;
                        cursor: pointer;
                        transform: ${getState() ? 'scaleX(-1);' : ''};
                        &:hover {
                            border-bottom: 1px solid;
                        }
                    `}
                />
            </div>
            {getState() && children}
        </DrawerContainer>
    );
};

export default Drawer;
