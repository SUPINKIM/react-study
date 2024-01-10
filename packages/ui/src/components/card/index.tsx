import { TPropsWithChildren } from '@/types';
import { ICardProps } from './types';

const Card: TPropsWithChildren<ICardProps> = ({ imageUrl, title, explain }) => {
    return (
        <div>
            {/*썸네일 자리 */}
            <img
                src={imageUrl}
                alt='thumbnail'
            />
            {/* hover시 타이틀 + 설명 텍스트 */}
            {title && explain && (
                <div>
                    <div>{title}</div>
                    <div>{explain}</div>
                </div>
            )}
        </div>
    );
};

export default Card;
