import { Suspense, useEffect } from 'react';
import { css } from '@emotion/react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import InteractionHome from '@components/interaction';
import { modalComponentState, modalOpenState } from '@/store/modal';
import Modal from '@/components/modal';
import Loading from '@components/loading';
import { ModalComponentsName } from '@/store/modal/types';
import { bounce } from './styles';

const Home = () => {
    const [isOpen, toggleOpenState] = useRecoilState(modalOpenState);
    const setComponent = useSetRecoilState(modalComponentState);

    useEffect(() => {
        setComponent(ModalComponentsName.LIST);
    }, [setComponent]);

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
            <Suspense fallback={<Loading />}>
                <Modal />
            </Suspense>
        </div>
    );
};

export default Home;
