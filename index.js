function calcularIMC(){
    var nombre =document.getElementById('nombre').value;
    var alturaEnCentimetros = 
     parseInt(document.getElementById('altura').value);
    var alturaEnMetros = alturaEnCentimetros/ 100;
    var pesoEnKilos =
     parseInt(document.getElementById('peso').value);
    
    var imc = Math.round(pesoEnKilos / (alturaEnMetros*alturaEnMetros));
    var clasificacion;    

    if(imc < 18.5){
        clasificacion = 'esta muy delgado';

    } else if(imc < 25){
        clasificacion =  'esta saludable';
    } else{
        clasificacion = 'tiene sobrepeso';
    }

    var respuesta = 'Hola, Tu IMC es ' + imc + ' y tu' + clasificacion ;
    alert(respuesta);

}