process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
export default function rotate(array : number[], d : number) : number [] {
  for(let i = 0; i < d; i++) {
    const first = array[0];
    for (let j = 0; j < array.length - 1; j++) {
      array[j] = array[j + 1];
    }
    array[array.length - 1] = first;
  }

  return array;
}

