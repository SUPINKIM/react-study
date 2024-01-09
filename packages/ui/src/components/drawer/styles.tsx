import styled from '@emotion/styled';

export const DrawerContainer = styled.div<{ isOpen: boolean }>(props => ({
    width: props.isOpen ? '200px' : '48px',
    position: 'fixed',
    backgroundColor: '#abc3',
    height: '100%',
    transition: 'all 0.2s',
    borderTopRightRadius: '6px',
    borderBottomRightRadius: '6px'
}));
