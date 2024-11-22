import { PropsWithChildren } from 'react';
import { SingletonRouter } from 'next/router';

interface Props {
    singletonRouter: SingletonRouter;
}
type ParentComponent<T = unknown> = React.FC<PropsWithChildren<T>>;
export declare const WithTransitions: ParentComponent<Props>;
export {};
