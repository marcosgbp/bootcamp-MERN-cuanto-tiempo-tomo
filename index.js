Number.prototype.isPrime = function() {
    //Calculo la raiz cuadrada
    let raiz_cuadrada = Math.sqrt(this);
    for( let i=2; i<raiz_cuadrada; i++ ) {
        if( this % i === 0 ) {            
            return false;
        }
    }
    return true;
}
//perf_hooks es un API de Medición de tiempo
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);

//Respuesta: la función con recursividad es más rápido por 2 milisegundos

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);
//Otra forma de hacer una función reversed
const reversed2 = (story)=>{
        let newText = "";
        for(let i=story.length-1; i>0; i--){
            newText+=story[i];
        }
        return newText;
}
console.log(reversed2(story));
