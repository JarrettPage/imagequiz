import flowers from './data';

let thirdRow = [];
let eighteenth = (flowers.length / 3) * 2;

for(var i=eighteenth-1; i<flowers.length; i++){
    thirdRow.push(flowers[i]);
}

export default thirdRow;