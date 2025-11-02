import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ mode }) => ({
    base: mode === 'production' ? '/ndmvr-r3f/' : '/',
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.jsx'),
            name: 'Ndmvr r3f React Library Vite',
            fileName: (format) => `ndmvr-r3f.${format}.js`
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'react-router-dom',
                'aframe',
                'three',
                'jsroot',
                '@ndmspc/ndmvr-aframe'
            ],
            output: {

                globals: {
                    react: 'React'
                },
                inlineDynamicImports: true
            }
        }
    },
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/lib/assets',
                    dest: ''
                }
            ]
        })
    ],
    optimizeDeps: {
        exclude: ['gl > gl']
    }
}))
