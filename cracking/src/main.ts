import { fromArray, rotate } from './nodeRotation';

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array : string[] = [];
var input_currentline = 0;

process.stdin.on('data', function (data: string) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    let raw = readLine().split(' ');
    const a = raw.map(Number);

    // const a = [1, 2, 3, 4, 5];
    // const k = 4;
    const linked = fromArray(a);
    // console.log(linked.toString());
    const rotated = rotate(linked, k);
    console.log(rotated.toString());
}