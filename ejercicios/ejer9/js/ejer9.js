let i=prompt("Introduce minimo:");
let max=prompt("Introduce maximo:");
while(parseInt(i)<=parseInt(max)){
    if(i%3==0 && i%5==0){
        console.log("FIZZBUZZ");
    }else{
        if(i%3==0){
            console.log("FIZZ");
        }else{
            if(i%5==0){
                console.log("BUZZ");
            }else{
                console.log(i);
            }
        }
    }
    i++;
}