import GlitchedWriter from '../index';
export default class State {
    writer: GlitchedWriter;
    nGhosts: number;
    maxGhosts: number;
    /**
     * Numerical data about progress of writing
     */
    progress: {
        percent: number;
        done: number;
        todo: number;
        increase(): void;
        reset(todo: number): void;
        finish(): void;
    };
    isTyping: boolean;
    isPaused: boolean;
    finished: boolean;
    erasing: boolean;
    constructor(writer: GlitchedWriter);
    get ghostsInLimit(): boolean;
    play(): void;
    pause(): void;
    finish(): void;
    addClass(className?: 'gw-writing' | 'gw-erasing'): void;
    removeClasses(): void;
}
