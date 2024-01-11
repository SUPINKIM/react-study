import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
            plugins: [['@swc/plugin-emotion', {}]]
        }),
        tsconfigPaths(),
        dts()
    ],
    server: { port: 8080 },
    build: {
        lib: {
            entry: resolve(__dirname, './src/main.tsx'),
            formats: ['es'],
            name: '@my-blog/ui'
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                '@emotion/react',
                '@emotion/styled'
            ]
        },
        target: 'esnext'
    }
});
