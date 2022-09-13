import { parseCharset, filterDuplicates, getRandomFromRange, filterHtml, getRandom } from '../utils';
import { presets } from '../presets';
export default class Options {
    constructor(writer, options) {
        this.writer = writer;
        this.set(options);
    }
    set(options) {
        this.options = {
            ...presets.default,
            ...this.parseOptions(options)
        };
        this.updateInternal();
    }
    extend(options) {
        this.options = {
            ...this.options,
            ...this.parseOptions(options)
        };
        this.updateInternal();
    }
    parseOptions(options) {
        if (!options)
            return {};
        if (typeof options === 'string')
            return presets[options] ?? {};
        return options;
    }
    updateInternal() {
        const { options } = this;
        this.glyphs = parseCharset(options.glyphs);
        this.setCharset();
        this.space = options.fillSpace ? ' ' : '';
        if (Number.isInteger(options.oneAtATime))
            this.oneAtATime = options.oneAtATime;
        else if (options.oneAtATime === 'word')
            this.oneAtATime = 'word';
        else
            this.oneAtATime = options.oneAtATime ? 1 : 0;
    }
    setCharset() {
        const { writer } = this;
        let { glyphs } = this;
        if (this.glyphsFromText)
            glyphs += filterDuplicates(writer.previousString + (this.html ? filterHtml(writer.goalText) : writer.goalText));
        this.charset = [...glyphs].filter((l) => !['\t', '\n', '\r', '\f', '\v'].includes(l));
        this.setMaxGhosts();
    }
    setMaxGhosts() {
        const { writer: { charTable }, options: { maxGhosts } } = this;
        if (Number.isInteger(maxGhosts))
            this.maxGhosts = maxGhosts;
        const { length } = charTable.filter((char) => char.specialType !== 'tag');
        this.maxGhosts = Math.round((length || 20) * maxGhosts);
    }
    getGlyph(char) {
        const { options } = this;
        return options.genGlyph ? options.genGlyph(char, this.baseGetGlyph) : this.baseGetGlyph();
    }
    baseGetGlyph() {
        return getRandom(this.charset) ?? '';
    }
    get steps() {
        return getRandomFromRange(this.options.steps);
    }
    getInterval(char) {
        const { options, baseGetInterval } = this;
        return options.genInterval
            ? options.genInterval(char, baseGetInterval.bind(this, char))
            : baseGetInterval.call(this, char);
    }
    baseGetInterval(char) {
        let interval = getRandomFromRange(this.options.interval);
        if (char.specialType === 'whitespace')
            interval /= 1.8;
        return interval;
    }
    getDelay(char) {
        const { options } = this;
        return options.genDelay ? options.genDelay(char, this.baseGetDelay) : this.baseGetDelay();
    }
    baseGetDelay() {
        return getRandomFromRange(this.options.delay);
    }
    get mode() {
        return this.options.mode;
    }
    get html() {
        return this.options.html;
    }
    get endless() {
        return this.options.endless;
    }
    get fps() {
        return this.options.fps;
    }
    get letterize() {
        return this.options.letterize;
    }
    get ghostChance() {
        return this.options.ghostChance;
    }
    get changeChance() {
        return this.options.changeChance;
    }
    get glyphsFromText() {
        return this.options.glyphsFromText;
    }
}
