var num=prompt(num);
if(typeof num != "number"){
    window.alert("NO ES UN NUMERO");
}

if(parseInt(num)%2==0){
    console.log("PAR");
}else{
    console.log("IMPAR");
}