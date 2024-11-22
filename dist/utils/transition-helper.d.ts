interface Props {
    skipTransition?: boolean;
    classNames?: string[];
    update: () => Promise<void>;
    onFinish?: () => void;
}
export declare function transitionHelper({ skipTransition, update, onFinish, }: Props): ViewTransition | {
    ready: Promise<Error>;
    updateCallbackDone: Promise<void>;
    finished: Promise<void>;
    skipTransition: () => undefined;
};
export {};
