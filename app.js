
const { options, describe } = require('yargs');
const {crearArchivo } = require('./helpers/multiplicar');// llama a la funcion creada en multiplicar llamada crearArchivo 
const colors = require('colors');
const argv = require('yargs')
        .option('b',{
          alias:'base',
          type:'number',
          demandOption:true,
          describe: 'es el numero por el cual se creara la tabla'
        })
        .option('l',{
          alias:'listar',
          type:'boolean',
          demandOption:true,
          default:false,// pone el valor por defecto
          describe: 'indica si se quiere listar la tabla'
        })
        .option('h',{
          alias:'hasta',
          type:'number',
          demandOption:false,
          default:10,
          describe: 'es el numero que indica hasta donde se quiere multiplicar'
        })
        .check( (argv,options)=>{
          if(isNaN(argv.b)){//pregunta si el argumento es un not a number (no es un numero) si es asi lanza un error
            throw 'la base tiene que ser un numero'
          }
          if(isNaN(argv.h)){//pregunta si el argumento es un not a number (no es un numero) si es asi lanza un error
            throw 'el numero a multiplicar tiene que ser un numero'
          }
          return true;// despues de las verificaciones debe retornar un true sino mostrara todo como error
        })
        .argv;
    

//node app --help
// node app --version
//npm i yargs // instala yargs
//yargs permite poner comandos a ejecutar ejemplo:
//node app --base 5 --listar // pone el comando base=5 y --listar si no se pone nada pone como boolean y dara true 
console.clear();
//console.log(argv);
//console.log('base: yargs',argv.b);//b porque en option se escribio b
//const[ , ,arg3 = 'base=5']= process.argv;// desestructuracion de arreglos, donde arg3  tendra base = 5 por defecto
//const [,base = 5] = arg3.split('=');


//const base = 3;

crearArchivo(argv.b,argv.l,argv.h)// aqui se envian los argumentos del argv
  .then(console.log(`tabla-${argv.b}.txt creado`.green))
  .catch(err => console.log(err));
