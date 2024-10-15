let mes=parseInt(prompt("Ingrese el mes: "));
resultado=cuatri(mes);
console.log(resultado);
function cuatri(a){
    if(a>=1 && a<=4){
        return "Primer cuatrimestre";
    }else{
        if(a>4 && a<=8){
            return "Segundo cuatrimstre";
        }else{
            if(a>8 && a<=12){
                return "Tercer cuatrimestre";
            }
        }
    }
}