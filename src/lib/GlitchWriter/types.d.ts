import type GlitchedWriter from './index';
import type Char from './modules/char';
import type Options from './modules/options';
import type State from './modules/state';
export declare type ModifyInterface<T, R> = Omit<T, keyof R> & R;
export declare type RangeOrNumber = [number, number] | number;
export interface OptionsFields {
    steps: RangeOrNumber;
    interval: RangeOrNumber;
    delay: RangeOrNumber;
    changeChance: number;
    ghostChance: number;
    maxGhosts: number;
    oneAtATime: number | 'word';
    glyphsFromText: boolean;
    mode: 'matching' | 'normal' | 'erase' | 'erase_smart' | 'clear';
    html: boolean;
    letterize: boolean;
    endless: boolean;
    fps: number;
}
export declare type AllCustomOptions = ModifyInterface<OptionsFields, {
    glyphs: string | string[] | Set<string>;
    fillSpace: boolean;
    oneAtATime: OptionsFields['oneAtATime'] | boolean;
    genGlyph?: (char: Char, base: () => string) => string;
    genDelay?: (char: Char, base: () => number) => number;
    genInterval?: (char: Char, base: () => number) => number;
}>;
export declare type CustomOptions = Partial<AllCustomOptions>;
export interface HTMLWriterElement extends Element {
    $writer?: GlitchedWriter;
}
export interface WriteOptions {
    erase?: boolean;
}
export interface PlayOptions {
    reverse?: boolean;
}
export interface WriterDataResponse {
    string: string;
    writer: GlitchedWriter;
    options: Options;
    state: State;
    status?: 'ERROR' | 'SUCCESS';
    message?: string;
    error?: unknown;
}
export declare type CallbackType = 'start' | 'step' | 'finish';
export declare type Callback = (string: string, writerData: WriterDataResponse) => any;
