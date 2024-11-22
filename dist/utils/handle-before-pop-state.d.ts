import { NextRouter } from 'next/router';

interface TransitionOptions {
    shallow?: boolean;
    locale?: string | false;
    scroll?: boolean;
    unstable_skipClientCache?: boolean;
}
export interface NextHistoryState {
    url: string;
    as: string;
    options: TransitionOptions;
}
export declare const handleBeforePopState: (props: NextHistoryState, router: NextRouter) => boolean;
export {};
