import styled from '@emotion/styled';

import { PersonCircle } from '@emotion-icons/bootstrap';

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
