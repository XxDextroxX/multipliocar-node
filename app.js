const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const { argv } = require('./config/yargs')
const colors = require('colors');




let comando = argv._[0];
switch (comando) {
    case 'listar':

        console.log('Listar');
        listarTabla(argv.base, argv.limite)

        break;

    case 'crear':

        console.log('Crear');

        crearArchivo(Number(argv.base), Number(argv.limite))
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));


        break;
    default:
        console.log('Comando no reconocido');
}


// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
// console.log(base);