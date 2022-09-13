import GlitchedWriter from '..';
export default class Animator {
    writer: GlitchedWriter;
    last: number;
    rate: number;
    running: boolean;
    constructor(writer: GlitchedWriter);
    run(): void;
    frame(t: number): any;
    animate(): void;
}
