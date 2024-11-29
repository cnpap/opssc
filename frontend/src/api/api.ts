import { paths } from './openapi/opss-api';
import createFetchClient from 'openapi-fetch';
import { toast } from '@/components/ui/toast';
import { ROUTE_AUTH_LOGIN } from '@/lib/const';
import { $local } from '@/store/browser/local';

// noinspection JSUnusedGlobalSymbols
export const $fetch = createFetchClient<paths>({
  baseUrl: '/api',
  fetch: async (r) => {
    const token = $local.getItem('token');
    if (token) {
      r.headers.set('Authorization', `Bearer ${token}`);
    }
    const result = await fetch(r);
    if (result.status > 201) {
      if ([401, 403].includes(result.status)) {
        setTimeout(() => {
          window.location.href = ROUTE_AUTH_LOGIN;
        }, 1000);
      }
      if (result.headers.get('Content-Type')?.includes('application/json')) {
        const data = (await result.json()) as { message?: string };
        if (data.message) {
          toast({
            title: '服务器错误',
            description: data.message,
            variant: 'destructive',
          });
        }
      }
    }
    return result;
  },
});
