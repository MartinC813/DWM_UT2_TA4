const sumaAll = (a, b) =>{
    let sumaFinal = 0;
    for(let i = a; i <= b; i++){
        sumaFinal = sumaFinal + i;
    }
    return sumaFinal;
}


console.log(sumaAll(2,3));