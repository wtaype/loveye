import $ from 'jquery';
import { getls,wiSmart } from './widev.js';
import { rutas } from './rutas/ruta.js';
import './header.js';

rutas.register('/chatwil', () => import('./chatwil/chatwil.js')); // ChatWil

const pages = ['inicio','prevencion','diagnostico','tratamiento','rutinas','examenes','tecnologia','lentes','alimentos','acerca'];
pages.forEach(pg => rutas.register(`/${pg}`, () => import(`./web/${pg}.js`))); // Publico general

rutas.register('/smile',() => getls('wiSmile')?import('./smile/smile.js'):import('./smile/descubre.js'));//Con Auth

rutas.init(); // Rutas registrados y go excelente app. 

wiSmart({
css: [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap',
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap'
],
js: [() => import('./footer.js')]
});