//En el Paso 2, Muestro los boletos de las bandas que adquirió
//Recuperando lo que hay en localStorage de la pagina anterior
let boletosQosta = localStorage.getItem("qosta");
let boletosThehives = localStorage.getItem("thehives");
let boletosThefoo = localStorage.getItem("thefoo");

let pp_ticket= "";

document.getElementById("h2").innerHTML += "El total de su Compra es MXN$" + `${localStorage.getItem("GrandTotalCompra")}`;
document.getElementById("h2").innerHTML += " por " + `${localStorage.getItem("GrandTotalBoletos")}` + " Boletos ";


  //Manejo de las imagenes

    let boletos = localStorage.getItem("GrandTotalBoletos");
   
   
    
    var bands = [
      { name: "Queens Of Stone Age", img: "./img/ticket_qosta.png", imgTicket:"ticket_qosta.png" },
      { name: "The Hives", img: "./img/ticket_thehives.png", imgTicket:"ticket_thehives.png"   },
      { name: "Foo Fighters", img: "./img/ticket_thefoo.png", imgTicket:"ticket_thehives.png"   },      
  ];
  
   

      if ( boletosQosta > 0 ){                        
        let band=bands[0];        
        const html = "<img src='" + band.img +"'/>";                   
        document.getElementById("slide1").innerHTML += html ; 
        };
        if ( boletosThehives > 0) {        
          let band=bands[1];
          const html = "<img src='" + band.img +"'/>";    
          document.getElementById("slide2").innerHTML += html ; 
        };
        if (boletosThefoo > 0) {        
        
          let band=bands[2];
          const html = "<img src='" + band.img +"'/>";  
          document.getElementById("slide3").innerHTML += html ; 
        }


        let EnviarCompra = document.getElementById('EnviarCompra');
        EnviarCompra.addEventListener("click",function() { 
          if (validarFormulario() > 0 ) {            

            let timerInterval
            Swal.fire({
              title: ' Viva el Rock !!!',
              html: 'Los boletos está siendo procesados y enviados a tu correo.Esta ventana se cerrará automáticamente.',
              timer: 3000,
              imageUrl: './img/msgFinal.jpg',
              imageWidth: 384,
              imageHeight: 216,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft()
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {  
        
                
                if (result.dismiss === Swal.DismissReason.timer) {

                 /**  Implementando el llamado a la API EmailJS */                                 
                 emailjs.send("service_6zeuxts", "template_1q18y0f", {
                  to_name: document.getElementById('nombre').value,
                  from_name: "patricia.olivares@gmail.com",
                  to_email: document.getElementById('email').value,
                  message: "Gracias por tu compra, que los disfrutes.",
                  p_ticket1: "https://raw.githubusercontent.com/paty-olivares/Coder43155_JavaScriptEntregas/0578b189f5d2b70303facc49ca122ff8844781a0/img/ticket_qosta.png",  
                  p_ticket2: "https://raw.githubusercontent.com/paty-olivares/Coder43155_JavaScriptEntregas/0578b189f5d2b70303facc49ca122ff8844781a0/img/ticket_thehives.png",  
                  p_ticket3: "https://raw.githubusercontent.com/paty-olivares/Coder43155_JavaScriptEntregas/0578b189f5d2b70303facc49ca122ff8844781a0/img/ticket_thefoo.png",
                });
                
              }

            
            })
            //Retrasando el redirect al Index
            RetrasarRedirect();     

     

//****************** Reemplacé este sweeetAlert por el que se autocierra con un timer */
//             Implementando promesa, En este caso a través del sweetAlert               
            // Swal.fire({
            //   title: ' Viva el Rock !!!',
            //   text: 'Los boletos serán enviados a tu correo. Gracias por tu compra.',
            //   imageUrl: './img/msgFinal.jpg',
            //   imageWidth: 384,
            //   imageHeight: 216,
            //   imageAlt: 'Rock',
            // }).then((result) => {
            //   if (result.isConfirmed) {    
                
            //     /**  Implementando el llamado a la API EmailJS */                
            //      //Implementando llamados a API
            //     emailjs.send("service_6zeuxts", "template_1q18y0f", {
            //       to_name: document.getElementById('nombre').value,
            //       from_name: "patricia.olivares@gmail.com",
            //       to_email: document.getElementById('email').value,
            //       message: "Gracias por tu compra, que los disfrutes.",
            //       p_ticket: "https://raw.githubusercontent.com/paty-olivares/Coder43155_JavaScriptEntregas/0578b189f5d2b70303facc49ca122ff8844781a0/img/ticket_qosta.png",
            //     });
            //   }
            // }
            // )

            // RetrasarRedirect();          

   //--------------------------------------------------------------------------------------------------------------------------------------------         
           };
        }); 

        let EnviarIndex = document.getElementById('EnviarIndex');
        EnviarIndex.addEventListener("click",function() {         
              //  window.location = "index.html";  
              window.history.back();      
        }); 



        // //----------------------- Validar campos 
 function validarFormulario(){
      //Validaciones
      let nombre = document.getElementById('nombre');
      let email = document.getElementById('email');
 
      //valido el nombre
       if (nombre.value.length==0){
            msgValidaciones(1)
            document.miforma.nombre.focus();
            return 0;
       }
      
      if (email.value.length==0){
        msgValidaciones(2)
       document.miforma.email.focus();
       return 0;
    }

 return 1;
 }; 

//---------Mensajes de Validaciones con Tostify
 const msgValidaciones = (valor) => {

  if (valor==1){
      Toastify({
    text: "El campo nombre no puede quedar vacío",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #b00015, #890010)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}

if (valor==2){
  Toastify({
text: "Tiene que escribir un email",
duration: 3000,
newWindow: true,
close: true,
gravity: "top", // `top` or `bottom`
position: "right", // `left`, `center` or `right`
stopOnFocus: true, // Prevents dismissing of toast on hover
style: {
  background: "linear-gradient(to right, #b00015, #890010)",
},
onClick: function(){} // Callback after click
}).showToast();
}
}

function delay(time){
	return new Promise(resolve => setTimeout(resolve, time));
}


async function RetrasarRedirect(){
	await delay(5000);
    //Despues de enviar el correo redireccionar al index
    window.location = "index.html";
    //window.history.back();      
}



