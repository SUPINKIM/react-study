import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './global-style';

function App() {
    return (
        <RecoilRoot>
            <GlobalStyle>
                <Outlet />
            </GlobalStyle>
        </RecoilRoot>
    );
}

export default App;
