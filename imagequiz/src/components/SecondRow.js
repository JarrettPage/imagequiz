import flowers from './data';
    
let secondRow = [];
let ninth = flowers.length / 3;

for(var i=0; i<flowers.length; i++){
    if(i>ninth-1 && i<=(ninth*2)-1){
        secondRow.push(flowers[i]);
    }
    else{
        continue;
    }
}

export default secondRow;