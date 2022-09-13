import GlitchedWriter from '..';
import { filterHtml } from '../utils';
export default class Animator {
    constructor(writer) {
        this.last = 0;
        this.rate = 16;
        this.running = false;
        this.writer = writer;
    }
    run() {
        // animator runs only for non-letterize mode
        if (this.running || this.writer.options.letterize)
            return;
        this.rate = Math.floor(1000 / this.writer.options.fps);
        this.running = true;
        requestAnimationFrame(this.frame.bind(this));
    }
    frame(t) {
        // exit the loop if the writer isn't writing anymore
        if (!this.writer.state.isTyping) {
            this.animate.call(this);
            return (this.running = false);
        }
        // keep it above specified refresh rate
        if (!this.last)
            this.last = t;
        if (t - this.last < this.rate)
            return requestAnimationFrame(this.frame.bind(this));
        // animate text
        this.animate.call(this);
        // request next frame
        this.last = t;
        return requestAnimationFrame(this.frame.bind(this));
    }
    animate() {
        const { htmlElement, string } = this.writer;
        if (this.writer.options.html)
            htmlElement.innerHTML = string;
        else
            htmlElement.textContent = string;
        htmlElement.setAttribute('data-gw-string', this.writer.options.html ? filterHtml(string) : string);
    }
}
