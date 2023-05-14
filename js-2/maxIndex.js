
let Array
function maxIndex(array){
    let maximo = 0;
    let pocision = 0;
    if(array.length === 0){
        return -1;
    } else{
        for (let i=0;i<array.length;i++){
            if(array[i]>maximo){
                maximo = array[i];
                pocision = i;
            }
        }
    }
return pocision;

}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1