import type GlitchedWriter from '../index';
import type { Callback, CallbackType } from '../types';
export default class Emiter {
    writer: GlitchedWriter;
    callbacks: {
        start: Callback[];
        step: Callback[];
        finish: Callback[];
    };
    constructor(writer: GlitchedWriter);
    addCallback(type: CallbackType, callback: Callback): void;
    removeCallback(type: CallbackType, callback: Callback): boolean;
    callback(type: CallbackType, ...args: Parameters<Callback>): void;
    call(eventType: 'step' | 'finish'): void;
    private emitEvent;
}
