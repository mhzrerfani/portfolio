export function random(min, max, math) {
    const result = Math.random() * (max - min) + min;
    if (math) {
        switch (math) {
            case 'floor':
                return Math.floor(result);
            case 'round':
                return Math.round(result);
            case 'ceil':
                return Math.ceil(result);
        }
    }
    return result;
}
export const clamp = (min, value, max) => Math.min(Math.max(value, min), max);
export const deleteRandom = (array) => array.splice(random(0, array.length, 'floor'), 1).length > 0;
export function getRandom(iterable) {
    return iterable[random(0, iterable.length, 'floor')];
}
export function filterDuplicates(iterable) {
    const isString = typeof iterable === 'string', result = [];
    new Set(iterable).forEach((x) => result.push(x));
    return isString ? result.join('') : result;
}
export function parseCharset(input) {
    let result;
    // Charset is a string
    if (typeof input === 'string')
        result = input;
    // Charset is an array
    else if (input.length)
        result = input.join('');
    // Charset is a Set
    else
        result = Array.from(input).join('');
    return result;
}
export const wait = (time) => new Promise((resolve) => setTimeout(() => resolve(time), time));
export function promiseWhile(conditionFunc, actionPromise) {
    const whilst = () => conditionFunc() ? actionPromise().then(whilst) : Promise.resolve();
    return whilst();
}
export const arrayOfTheSame = (value, length) => new Array(length).fill(value);
export const isInRange = (min, value, max) => value >= min && value < max;
export const animateWithClass = (element, className) => {
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
};
export function getRandomFromRange(range, round = true) {
    return typeof range === 'number' ? range : random(...range, round ? 'round' : undefined);
}
export const coinFlip = (p = 0.5) => Math.random() < p;
export const letterToLetterItem = (string) => ({
    value: string
});
export const stringToLetterItems = (string) => [...string].map(letterToLetterItem);
export const isSpecialChar = (l) => ['\t', '\n', '\r', '\f', '\v', '', ' '].includes(l);
const findHTMLPattern = '(&(?:[a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});)|(<style.+?>.+?</style>|<script.+?>.+?</script>|<(?:!|/?[a-zA-Z]+).*?/?>)';
export const wordsRgx = /(&(?:[a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});)|.\w+,*\.*"*\s?|\s+|\S+/gi;
export function htmlToArray(string) {
    const reg = new RegExp(findHTMLPattern, 'gi'), resultArray = [];
    let find, lastIndex = 0;
    while ((find = reg.exec(string))) {
        const from = find.index, to = reg.lastIndex, stringBefore = string.slice(lastIndex, from);
        lastIndex = to;
        stringBefore && resultArray.push(...stringToLetterItems(stringBefore));
        const result = {
            value: find[0],
            type: find[1] !== undefined ? 'html_entity' : 'tag'
        };
        resultArray.push(result);
    }
    string.length > lastIndex && resultArray.push(...stringToLetterItems(string.slice(lastIndex)));
    return resultArray;
}
export function filterHtml(string) {
    const reg = new RegExp(findHTMLPattern, 'g');
    return string.replace(reg, '');
}
export function trim(str, l) {
    if (!l || l.length > 1 || !str)
        return str;
    if (l === ' ')
        return str.trim();
    const reg = new RegExp(`${l}+`, 'g');
    let find, result = str;
    while ((find = reg.exec(str))) {
        const from = find.index, to = reg.lastIndex, length = to - from;
        if (from === 0)
            result = result.substring(to);
        else if (to === str.length)
            result = result.substring(result.length - length);
    }
    return result;
}
