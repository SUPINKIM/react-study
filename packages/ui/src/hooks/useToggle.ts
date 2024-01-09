import { useState } from 'react';

export const useToggle = () => {
    const [onState, updateState] = useState(false);

    const getState = () => onState;

    const setState = () => updateState(!onState);

    return {
        getState,
        setState
    };
};
