import { FC } from 'react';
import { CardThumbnailProps } from './types';

const CardThumbnail: FC<CardThumbnailProps> = ({
    title,
    imageUrl,
    description
}) => {
    // image + title + description
    return (
        <div>
            <img
                src={imageUrl}
                alt={imageUrl}
            />
            <p>{title}</p>
            {description && <span>{description}</span>}
        </div>
    );
};

export default CardThumbnail;
