import * as util from 'util';
import * as fs from 'fs';

const readFileAsync = util.promisify(fs.readFile);

let input = await readFileAsync('input.txt', 'utf-8');
input = input.split('\n').map(n => n.split(' ').map( n => isNaN(n) ? n : +n));

const horizontalPosition = input.filter(n => n.includes('forward')).reduce(
    function(previous, current) {
        return previous + current.pop()
    }, 0
);

const depth = input.filter(n => !n.includes('forward')).reduce(
    function(previous, current) {
        return previous +
        (current.includes('up') ? current.pop() : -current.pop());
    }, 0
);

console.log('Answer part 1: ' + horizontalPosition * depth);
