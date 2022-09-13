/* eslint-disable no-unused-vars */
import GlitchedWriter from '..';
export default function letterize() {
    if (!this.options.letterize)
        return;
    const html = this.charTable
        .map(({ specialType, gl }) => specialType === 'tag' ? gl : '<span class="gw-char"></span>')
        .join('');
    this.htmlElement.innerHTML = html;
    const spans = this.htmlElement.querySelectorAll('span.gw-char');
    let i = 0;
    this.charTable.forEach(char => {
        if (char.specialType === 'tag')
            return;
        char.spanElement = spans[i];
        i++;
    });
}
