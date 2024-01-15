import { css } from '@emotion/react';
import InteractionHome from '@components/interaction';
import { bounce } from './styles';

const Home = () => {
    return (
        <div>
            <div
                css={css`
                    padding-left: 50px;
                    font-size: 20px;
                    font-weight: 500;
                    animation: ${bounce} 1.5s ease 3;
                `}>
                👇 이미지를 더블클릭 해보세요!
            </div>
            <InteractionHome />
        </div>
    );
};

export default Home;
