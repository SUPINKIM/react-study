import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const slideUp = keyframes`
  from {
    transition: all 0.8s ease;
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
`;

const FloatingOptionItem = styled.div`
    width: 40px;
    height: 40px;
    color: #2f2f2f;
    cursor: pointer;
    background-color: #ffffff;
    box-shadow: 1px 1px 2px 1px #9f9f9f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${slideUp} 1s;
    :hover {
        transform: scale(0.96);
    }
    :last-child {
        margin-bottom: 12px;
    }
`;

const FloatingDefaultButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #4f4f4f;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease-out;
    box-shadow: 1px 1px #9f9f9f;
    :hover {
        transform: scale(0.96) rotate(180deg);
    }
`;

export { FloatingOptionItem, FloatingDefaultButton };
