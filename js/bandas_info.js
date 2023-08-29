//Bibliografía:
//Estoy usando esta API de Músicos y Música gratutita que encontré
//Web Site:  https://rapidapi.com/Glavier/api/genius-song-lyrics1 
//Implementación: Búsqueda por información General del Artista se espera recibir el ID del artista.
//Cuando el usuario seleccione en el dropdown ejecutará el llamado a la API y modificará el DOM de acuerdo a los 
//valores encontrados en el Fetch.
//El API Key lo obtuve de forma gratuita registrándome en la página.

//Otras formas de buscar 
//'https://genius-song-lyrics1.p.rapidapi.com/search/multi/?q=' + txtBuscadorInput + '&per_page=3&page=1';
//'https://genius-song-lyrics1.p.rapidapi.com/search/?q=Foo%20Fighters&per_page=10&page=1';

    

const txtBuscadorInput  = document.getElementById('ListadoBandas');
txtBuscadorInput.addEventListener("change",function() {   

//Pasando en el query de la API ? el Id del artista
const url = 'https://genius-song-lyrics1.p.rapidapi.com/artist/details/?id=' + txtBuscadorInput.value;


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '90dfb0d003mshbc6a59c838d531fp1ecbf4jsndc5cf57e1f9b',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};
try {
   
    fetch(url, options)
    .then( (resp) => resp.json() )
    .then( (data) => {
      //Busqueda por Id de Artista
      //console.log(data.artist.description_preview);
         
      node=document.getElementById("milista");      
     // console.log(node.childElementCount);
     
     //Limpiando la pantalla cada vez que seleccione un valor diferente
     if (node.childElementCount > 0) {
       // node.removeChild(node);      
       node.removeChild(document.getElementById("miLi"));            
     }

     //Creando mis nuevos componentes en el DOM
      const li = document.createElement('li')
      li.id="miLi"          
      li.innerHTML = `
               <h1>${data.artist.name}</h1>              
               <img class="containerAPIImg" src="${data.artist.image_url}" alt="Img of my band" >
               <h2>${data.artist.description_preview}</h2>               
               `
               
      node.append(li)



        //Todo este código es para probar una búsqueda más general Ya me funciona y lo voy a dejar
        // Para que no se me olvide.
        //Primero probando como acceder a la data
       //  console.log(data.sections[0].hits[0].result);
        // console.log(data.sections[0].hits[0].result.id);
        
        //  for(let i of data["sections"]){   
        //     if(i["hits"].length == 0 ) {
        //         const li = document.createElement('li')
        //         li.innerHTML = `<h1> NO SE ENCONTRARON DATOS PARA ESTA BANDA </h1>`       
        //         lista.append(li)  
        //         return;
        //       }
        //       else
        //       {         
        //  //   console.log(y.result.id);
        // //   console.log(y.result.name);
        //        for(let y of i["hits"]) {
        //         const li = document.createElement('li')
        //         li.innerHTML = `
        //         <h1>${y.result.name}</h1>
        //         <h2>${y.result.id}</h2>
        //         <img width=500 hight=500 src="${y.result.header_image_url}" alt="Img of my band" >
        //         `
        //         lista.append(li) 
        //        }
        //       }          
        //     }
         })
       
} catch (error) {
	console.error(error);
}
})