import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './global-style';

const queryClient = new QueryClient();

function App() {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <GlobalStyle>
                    <Outlet />
                </GlobalStyle>
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default App;
