let array;
function join (array){
    let arreglo= "";
    for(let i=0;i<array.length;i++){
        if(i !== 0){
            arreglo += " ";
        }
        arreglo += array[i];
    }
    return arreglo;
}
console.log(join(["hola", "mundo", "?"])) //  hola mundo ? 
console.log(join(["Esto" ,"me", "esta" , "dando", "duro"])) // Esto me esta dando duro
console.log(join(["voy", "a", "llorar"])) // voy a llorar

