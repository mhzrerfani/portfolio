import Options from './modules/options';
import State from './modules/state';
import type Char from './modules/char';
import Emiter from './modules/emiter';
import type { CustomOptions, WriterDataResponse, Callback, HTMLWriterElement, CallbackType } from './types';
import { wait } from './utils';
import { presets, glyphs } from './presets';
import type { PresetName } from './presets';
import Animator from './modules/animator';
import Queue from './modules/queue';
export default class GlitchedWriter {
    htmlElement: HTMLWriterElement;
    options: Options;
    state: State;
    emiter: Emiter;
    animator: Animator;
    queue?: Queue;
    charTable: Char[];
    goalText: string;
    lastText: string;
    string: string;
    /**
     * Create new instance of Glitched Writer, that manages writing text to one HTML Element. Few writers can possess the same HTML Element, but don't write with them at the same time.
     * Use .write(string) method to start writing.
     * @param htmlElement HTML Element OR a Selector string (eg. '.text')
     * @param options Options object (eg. { html: true, ... }) OR preset name (eg. 'zalgo').
     * @param onFinishCallback Callback, that will be triggered when each writing finishes. Params passed: string & writer data.
     */
    constructor(htmlElement?: HTMLWriterElement | HTMLElement | Element | null | string, options?: CustomOptions | PresetName | null, onFinishCallback?: Callback);
    updateString(): void;
    get previousString(): string;
    /**
     * All the data, about current state of the writer instance.
     */
    get writerData(): WriterDataResponse;
    /**
     * Main function of Glitched Writer. It orders writer to start typing passed string. Can be called multiple times after each other, or even during writing.
     * @param text text, that will get written.
     * @returns Promise, with writer data result
     */
    write(text: string): Promise<WriterDataResponse>;
    /**
     * Order Glitched writer to write sequence of texts.
     * @param texts - Array of sequent strings to write.
     *
     * You can also pass a `query selector` or a `HTMLElement`.
     * The content of children `<p>` tags will make the text queue
     * @param queueInterval - Time to wait between writing each texts [ms]
     * @param loop - boolean | Callback | number - What to do when the queue has ended.
     * - false -> stop;
     * - true -> continue looping;
     * - Callback -> fire the callback and stop.
     * - number -> wait that many ms and then continue
     */
    queueWrite(texts: string[] | HTMLElement | Element | string, queueInterval?: number, loop?: boolean | Callback | number): void;
    /**
     * Add text to end method. Orders writer to write same string as previous, but with this added at the end.
     * @param string text that will get added
     * @returns Promise, with writer data result
     */
    add(string: string): Promise<WriterDataResponse>;
    /**
     * Remove last n-letters method. Orders writer to write same string as previous, but without n-letters at the end.
     * @param n number of letters to remove.
     * @returns Promise, with writer data result
     */
    remove(n: number): Promise<WriterDataResponse>;
    /**
     * Resume last writing order.
     * @returns Promise, with writer data result
     */
    play(): Promise<WriterDataResponse>;
    /**
     * Pause current writer task.
     */
    pause(): void;
    /**
     * Shorthand for changing endless option value
     * @param bool goal state
     */
    endless(bool: boolean): void;
    /**
     * Use this to add callback to one of the writer events
     *
     * save callback in a variable first if you want to remove it later.
     * @param type "start" | "step" | "finish"
     * @param callback your callback function: (string, writerData) => {}
     * @returns GlitchedWriter instance (this)
     */
    addCallback(type: CallbackType, callback: Callback): GlitchedWriter;
    /**
     * Use this to remove added callback
     * @param type "start" | "step" | "finish"
     * @param callback variable pointing to your function
     * @returns GlitchedWriter instance (this)
     */
    removeCallback(type: CallbackType, callback: Callback): GlitchedWriter;
    manageWriting(text: string | null): Promise<WriterDataResponse>;
    private preparePropertiesBeforeWrite;
    private playChT;
    private returnResult;
    getWriterData(status?: WriterDataResponse['status'], message?: WriterDataResponse['message'], error?: WriterDataResponse['error']): WriterDataResponse;
    private genGoalStringToErase;
}
/**
 * One time use, standalone write function. Used to order a temporary Glitched Writer instance to animate content of html element to chosen text.
 * @param string text, that will get written.
 * @param htmlElement HTML Element OR a Selector string (eg. '.text')
 * @param options Options object (eg. { html: true, ... }) OR preset name (eg. 'zalgo').
 * @param onStepCallback Callback, that will be triggered on every step. Params passed: string & writer data.
 * @param onFinishCallback Callback, that will be triggered when each writing finishes. Params passed: string & writer data.
 * @returns Promise, with writer data result
 */
export declare function write(string: string, htmlElement?: HTMLElement | Element | null | string, options?: CustomOptions | PresetName | null, onStepCallback?: Callback, onFinishCallback?: Callback): Promise<WriterDataResponse>;
/**
 * Standalone queueWrite function. Used to
 * @param texts - Array of strings to write.
 *
 * You can also pass a `selector` or a `HTMLElement`.
 * The content of children `<p>` tags will make the text queue
 * @param htmlElement Writer HTML Element OR a Selector string (eg. '.text')
 * @param options Options object (eg. { html: true, ... }) OR preset name (eg. 'zalgo').
 * @param queueInterval - Time to wait between writing each texts [ms]
 * @param loop - boolean | Callback | number - What to do when the queue has ended.
 * - false -> stop;
 * - true -> continue looping;
 * - Callback -> stop and fire the callback.
 * - number -> wait number ms and then continue
 * @param onStepCallback Callback, that will be triggered on every step. Params passed: string & writer data.
 * @param onFinishCallback Callback, that will be triggered when each writing finishes. Params passed: string & writer data.
 * @returns created GlitchedWriter instance
 */
export declare function queueWrite(texts: string[] | HTMLElement | Element | string, htmlElement?: HTMLElement | Element | null | string, options?: CustomOptions | PresetName | null, queueInterval?: number, loop?: boolean | Callback | number, onStepCallback?: Callback, onFinishCallback?: Callback): GlitchedWriter;
/**
 * A way to create new Writer without having to rely on defult export.
 * @param htmlElement HTML Element OR a Selector string (eg. '.text')
 * @param options Options object (eg. { html: true, ... }) OR preset name (eg. 'zalgo').
 * @param onFinishCallback Callback, that will be triggered when each writing finishes. Params passed: string & writer data.
 * @returns GlitchedWriter Class Instance
 */
export declare const create: (htmlElement?: string | HTMLElement | Element | null | undefined, options?: Partial<import("./types").AllCustomOptions> | "default" | "nier" | "typewriter" | "terminal" | "zalgo" | "neo" | "encrypted" | "bitbybit" | "cosmic" | null | undefined, onFinishCallback?: Callback | undefined) => GlitchedWriter;
export { presets, glyphs, wait };
export type { CustomOptions, WriterDataResponse, Callback };
