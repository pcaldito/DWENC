let fechaNac = prompt("Introduce tu año de nacimiento:");
if(parseInt(fechaNac)>2024){
    window.alert("No es una fecha de nacimiento valida");
}else{
    let edad=2024 - parseInt(fechaNac);
    window.alert(edad);
}