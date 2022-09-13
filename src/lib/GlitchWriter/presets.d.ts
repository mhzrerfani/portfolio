import type { RangeOrNumber } from './types';
export declare const glyphs: {
    nier: string;
    full: string;
    letterlike: string;
    numbers: string;
    zalgo: string;
    neo: string;
    uppercase: string;
};
export declare const presets: {
    default: {
        steps: RangeOrNumber;
        interval: RangeOrNumber;
        delay: RangeOrNumber;
        changeChance: number;
        ghostChance: number;
        maxGhosts: number;
        oneAtATime: number | "word";
        glyphs: string;
        glyphsFromText: boolean;
        fillSpace: boolean;
        mode: "matching" | "normal" | "erase" | "erase_smart" | "clear";
        html: boolean;
        letterize: boolean;
        endless: boolean;
        fps: number;
    };
    nier: Partial<import("./types").AllCustomOptions>;
    typewriter: Partial<import("./types").AllCustomOptions>;
    terminal: Partial<import("./types").AllCustomOptions>;
    zalgo: Partial<import("./types").AllCustomOptions>;
    neo: Partial<import("./types").AllCustomOptions>;
    encrypted: Partial<import("./types").AllCustomOptions>;
    bitbybit: Partial<import("./types").AllCustomOptions>;
    cosmic: Partial<import("./types").AllCustomOptions>;
};
export declare type PresetName = keyof typeof presets;
