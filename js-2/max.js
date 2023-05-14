let Array
function max(array){
    let maximo = 0;
    if(array.length === 0){
        return undefined;
    } else{
        for (let i=0;i<array.length;i++){
            if(array[i]>maximo){
                maximo = array[i]
            }
        }
    }
return maximo;

}
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined