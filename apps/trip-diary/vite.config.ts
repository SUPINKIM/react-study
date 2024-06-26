import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

import { dependencies } from './package.json';

const reactChunks = ['react', 'react-dom'];

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
            plugins: [['@swc/plugin-emotion', {}]]
        }),
        tsconfigPaths()
    ],
    server: { port: 3000 },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    ...Object.keys(dependencies).reduce(
                        (chunks, dependency) => {
                            if (!reactChunks.includes(dependency))
                                chunks[dependency] = [dependency];
                            return chunks;
                        },
                        {}
                    )
                }
            }
        }
    }
});
