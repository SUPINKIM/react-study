import { Outlet } from 'react-router-dom';
import GlobalStyle from './global-style';

function App() {
    return (
        <GlobalStyle>
            <Outlet />
        </GlobalStyle>
    );
}

export default App;
