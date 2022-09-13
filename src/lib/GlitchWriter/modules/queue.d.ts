import type GlitchedWriter from '..';
import type { Callback } from '../types';
export default class Queue {
    writer: GlitchedWriter;
    isStopped: boolean;
    texts: string[];
    isLooping: boolean;
    loopInterval: number;
    interval: number;
    index: number;
    endCallback?: Callback;
    constructor(writer: GlitchedWriter, texts: string[] | HTMLElement | Element | string, interval?: number, loop?: boolean | Callback | number);
    stop(): void;
    resume(): void;
    private loop;
}
