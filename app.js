const genera=document.querySelector(".boton");
const  reset=document.querySelector(".borrar");
const pantalla=document.querySelector(".pantalla")
const  tamclave=document.getElementById("espacio")
const copiar=document.getElementById("copy")

/**array de boxcheck */
 var chec=[le,min,nu,simb]

/**constantes de la clave */
var valorTamClave=tamclave.value;
var  may=false;
var minus=false;
var num=false;
var sign=false;



/**inicialización de checado */
chekadas()





/**funcionaida aqui sabemos cuando esta selecionado el check o deseleccionado */
function chekadas(){
   chec.forEach(valor =>{
      valor.addEventListener("click",function(){
          if(valor.value==" mayusculas" && may==false){
           may=true;
          }else if(valor.value==" mayusculas" && may==true){
            may=false;
          }
          if(valor.value=="minisculas" && minus==false){
            minus=true;
           }else if(valor.value== "minisculas" && minus==true){
             minus=false;
           }
           if(valor.value=="numero" && num==false){
            num=true;
           }else if(valor.value=="numero" && num==true){
             num=false;
           }
           if(valor.value=="simbolos" && sign==false){
            sign=true;
           }else if(valor.value=="simbolos" && sign==true){
             sign=false;
           } 
      })

   })
};






/**funciones */
reset.addEventListener("click",function(){
   pantalla.innerHTML=" "; 
});
/**boton de copia en el portapapeles */
copiar.addEventListener("click",function (){
   copyPortaPapeles()

})

/**aqui sabemos que numero de largo de la clabe se escojio */
tamclave.addEventListener("blur",function(){
   valorTamClave=tamclave.value
});


/**botonon generar y envia la operación a la pantalla */
genera.addEventListener("click",function(){
   codigosAleatorios(valorTamClave,may,minus,num,sign)
      
      
});


/**generador de password */
function codigosAleatorios(valorTamClave,may,minus,num,sign){
   const abecedario="abcdefghijklmnñopqrstuvwxyz";
   const mayus=abecedario.toUpperCase();
   const signos="!#$%&/)(?¿¡.,=;@{}[]"

   var abe=minus;
   var mayuscu=may;
   var nu=num;
   var sign=sign;


   var numeroIntroducido=valorTamClave;
   var contrasena="";

   var i=1;
   while ( i<=numeroIntroducido+1 ){
       let n=abecedario.charAt( 1 +Math.floor(Math.random()*abecedario.length));
       let m= mayus.charAt(1 +Math.floor(Math.random()*abecedario.length));
       let nuMeros= 0 +Math.floor(Math.random()*9);
       let s=signos.charAt(1+ Math.floor(Math.random()*signos.length));
       
      if (abe==true ||mayuscu==true ||nu==true || sign==true){
         if(contrasena.length<=numeroIntroducido && abe==true ){
            contrasena+=n
         }
         if(contrasena.length<=numeroIntroducido && mayuscu==true){
            contrasena+=m
         }
         if(contrasena.length<=numeroIntroducido && nu==true){
            contrasena+=nuMeros
         }
         if(contrasena.length<=numeroIntroducido && sign==true){
            contrasena+=s
         }
      }
         i++;
   
     
   };
  pantalla.innerHTML=contrasena.slice(0,numeroIntroducido); /*aqui a seguramos el tamaño de la cadena */
  

};

/**llamada de APi para copiar el portapapeles 
*/
function copyPortaPapeles(){
    const textarea=document.createElement("textarea");
    const password=pantalla.innerHTML;


   if(!pantalla){
      return
   }
   textarea.value=password;
   document.body.appendChild(textarea);
   textarea.select();
   document.execCommand("copy")
   textarea.remove()
   alert('Password copied to clipboard!');

};




