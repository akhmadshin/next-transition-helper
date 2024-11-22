import singletonRouter, { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';
import { handleRouteChangeComplete } from './utils/handle-route-change-complete';
import { handleHashChangeComplete, handleHashChangeStart } from './utils/handle-hash-change';

type ParentComponent<T = unknown> = React.FC<PropsWithChildren<T>>

export const WithTransitions: ParentComponent = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!router) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    let newRouterKey = singletonRouter.router!._key;

    if (window.__NTH_routerKeyByHashRouteKey && window.__NTH_routerKey) {
      newRouterKey = window.__NTH_routerKeyByHashRouteKey[newRouterKey] ?? newRouterKey;
    }
    window.__NTH_routerKey = newRouterKey;


    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('hashChangeStart', handleHashChangeStart);
    router.events.on('hashChangeComplete', handleHashChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('hashChangeStart', handleHashChangeStart);
      router.events.off('hashChangeComplete', handleHashChangeComplete);
    }
  }, []);

  return children;
}