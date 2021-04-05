const fs = require('fs');// llama a la libreria de file system
require('colors');
// recibe los argumentos enviandos en app.js 
const crearArchivo = (base = 5, listar = false , hasta = 10) =>{// si no manda nada se pondra 5
    return new Promise((resolve,reject)=>{
        if(base){
          
           
        
            let salida, consola = '';
            if(hasta){
                for(let i =1; i <= hasta; i++){
                    salida += `${base} x ${i} = ${base * i}\n`;// da salto de linea
                    consola += `${base}${' x'.blue} ${i} = ${base * i}\n`;
                } 
            }
            if(listar){
                console.log('====================='.rainbow);
                console.log('tabla del:',base);
                console.log('====================='.red);
                console.log(consola);
            }
                
            
            
        
            //fs.writeFile(`tabla-${base}.txt`, salida,(err) =>{// write file recibe el nombre del archivo a crear, los datos y un callback que imprimira el error
            //if (err) throw err;
        
            //console.log(`tabla-${base}.txt creado`);
            //})
            resolve(fs.writeFileSync(`./salida/tabla-${base}.txt`,salida));// recibe el nombre del archivo y los datos
            reject('hubo un problema al crear el archivo');
        }
        
      
       
    })
    
   

}

module.exports = {// esto permite exportar la funcion creada hacia otro archivo
     crearArchivo
}