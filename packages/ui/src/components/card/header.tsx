import { FC } from 'react';
import { css } from '@emotion/react';
import { CardHeaderDescription, CardHeaderTitle } from './styles';
import { CardHeaderProps } from './types';

const CardHeader: FC<CardHeaderProps> = ({ title, description }) => {
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                grid-row-gap: 4px;
            `}>
            {/* title */}
            <CardHeaderTitle>{title}</CardHeaderTitle>
            {/* description */}
            {description && (
                <CardHeaderDescription>{description}</CardHeaderDescription>
            )}
        </div>
    );
};

export default CardHeader;
