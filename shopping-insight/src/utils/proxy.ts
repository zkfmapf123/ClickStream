import { createProxyMiddleware } from 'http-proxy-middleware';
import { getEnv } from './getEnv';

export default function (app) {
  return app.use(
    createProxyMiddleware('/api', {
      target: getEnv().BASE_URL,
      changeOrigin: true,
    }),
  );
}
