function Empezarjuego()
{
    //variables
    alert("funciona");
    var num1 =Number(ramdom(num1));
    var num2 =Number(ramdom(num2));
    var resultado1= num1+num2;
    var resultadoN=0;
    var estado=0;
    var tiradas=1;
    //rulstado
    console.log("tu primera tirada fue = "+resultado1);
    //primer ciclo de comparacion
    if(resultado1==7 || resultado1==11)
    {
        console.log("Ganaste");
    }
    else if(resultado1==3||resultado1==7||resultado1==5)
    {
        console.log("perdiste");
    }
    else // si el resultado no es ninguno de los 2 anteriores se entra al ciclo de tirar otra vez
    {
        while(estado==0) //si estado no cambia seguira tirando dados
        {
            tiradas++; //contador de tiradas
            num1 =Number(ramdom(num1)); 
            num2 =Number(ramdom(num2));
            resultadoN=num1+num2;//resultado de la tirada
            console.log("tu tirada "+tiradas+" es ="+resultadoN);
            if(resultado1==resultadoN) //si la tirada actual es Igual a la primera cambia el estado
            {
                estado=1;       
            }
            else if(impar(resultadoN)==1) //si la tirada actual es impar cambia el estado
            {
              estado=2;        
            }
        }
        //ciclo para revisar el estado
        if(estado==1)
        {
            console.log("ganaste");      
        }
        else
        {
            console.log("perdiste");        
        }
    }
}

function ramdom(numero) //funcion para otener numero ramdom
{
    numero= Math.floor((Math.random()*6)+1);
    
    return(numero);
}
            
function impar(resultado) //funcion para obtener si es impar 
{
  var bandera=0;
    if(resultado%2!=0)
    {
        bandera=1;
    }
   return bandera;
//---
}
