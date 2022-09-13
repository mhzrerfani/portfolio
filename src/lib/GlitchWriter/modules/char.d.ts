import type GlitchedWriter from '../index';
import type { LetterItem } from '../utils';
export default class Char {
    index: number;
    l: string;
    gl: string;
    stepsLeft: number;
    ghosts: [string[], string[]];
    writer: GlitchedWriter;
    stop: boolean;
    specialType: LetterItem['type'];
    afterGlitchChance: number;
    els?: {
        charEl?: HTMLSpanElement;
        ghostsBeforeEl: HTMLSpanElement;
        letterEl: HTMLSpanElement;
        ghostsAfterEl: HTMLSpanElement;
    };
    constructor(writer: GlitchedWriter, l: string, gl: string, initialGhosts: string | undefined, specialType: LetterItem['type'], index: number);
    get string(): string;
    get finished(): boolean;
    private writeToElement;
    set spanElement(el: HTMLSpanElement);
    private appendChildren;
    type(): Promise<boolean>;
    step(): void;
    private addGhost;
    private removeGhost;
}
