import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
    }
  },
  server: {
    proxy: {
      '/professional': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            if (req.headers.origin) {
              proxyReq.setHeader('origin', 'http://127.0.0.1:8000');
              proxyReq.setHeader('referer', 'http://127.0.0.1:8000');
            }
          });
        },
      },
    },
  }
})
