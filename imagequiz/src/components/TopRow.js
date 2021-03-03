import flowers from './data';
    
let firstRow = [];
let ninth = flowers.length / 3;

for(var i=0; i<ninth; i++){
    firstRow.push(flowers[i]);
}

export default firstRow;