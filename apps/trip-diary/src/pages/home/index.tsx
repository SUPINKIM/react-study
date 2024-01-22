import React, { Suspense } from 'react';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';

import InteractionHome from '@components/interaction';
import { modalOpenState } from '@/store/modal';
import Modal from '@/components/modal';
import Loading from '@components/loading';
import { bounce } from './styles';

const Home = () => {
    const [isOpen, toggleOpenState] = useRecoilState(modalOpenState);

    const ModalContentsComponent = React.lazy(() => import('@components/list'));

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
            <InteractionHome handler={() => toggleOpenState(!isOpen)} />
            <Suspense fallback={Loading}>
                <Modal>
                    <ModalContentsComponent />
                </Modal>
            </Suspense>
        </div>
    );
};

export default Home;
