import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { PersonCircle } from '@emotion-icons/bootstrap';
import { ColorTypes } from '@my-blog/ui';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const AccountIcon = styled(PersonCircle)`
    width: 24px;
    cursor: pointer;
`;

export const Logo = styled(Link)`
    all: unset;
    font-size: 24px;
    font-weight: 600;
    color: ${ColorTypes.GREEN};
    cursor: pointer;
    &:hover {
        color: ${ColorTypes.GRAY};
    },
`;
