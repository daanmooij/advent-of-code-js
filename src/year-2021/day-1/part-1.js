import * as util from 'util';
import * as fs from 'fs';

const readFileAsync = util.promisify(fs.readFile);

const input = await readFileAsync('input.txt', 'utf-8');
const measurements = input.split('\n').map(n => +n);

let counter = 0;
measurements.forEach((value, index, array) => {
    if (index === 0) return;
    if (value > array[index - 1]) counter++;
});

console.log(counter);