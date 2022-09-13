import { filterHtml } from '../utils';
export default class Emiter {
    constructor(writer) {
        this.callbacks = {
            start: [],
            step: [],
            finish: []
        };
        this.writer = writer;
    }
    addCallback(type, callback) {
        this.callbacks[type].push(callback);
    }
    removeCallback(type, callback) {
        const array = this.callbacks[type], i = array.indexOf(callback);
        if (i === -1)
            return false;
        array.splice(i, 1);
        return true;
    }
    callback(type, ...args) {
        this.callbacks[type].forEach((cb) => cb(...args));
    }
    call(eventType) {
        const { writer } = this;
        writer.updateString();
        const { writerData, string } = writer;
        // for letterize: update data attribute every step
        if (writer.options.letterize)
            writer.htmlElement.setAttribute('data-gw-string', writer.options.html ? filterHtml(string) : string);
        // ON STEP
        if (eventType === 'step')
            return this.callback('step', string, writerData);
        // ON FINISH
        writer.state.finish();
        // change state to finished but do not fire callbacks
        if (writer.state.erasing)
            return;
        this.callback('finish', string, writerData);
        this.emitEvent();
    }
    emitEvent() {
        const { htmlElement, writerData } = this.writer;
        if (typeof CustomEvent === 'undefined')
            return;
        htmlElement.dispatchEvent(new CustomEvent('gw-finished', { detail: writerData }));
    }
}
