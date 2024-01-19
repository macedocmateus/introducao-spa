import { Router } from './router.js';

const router = new Router();
router.add('/', '/pages/home.html');
router.add('/about', '/pages/about.html');
router.add('/contact', '/pages/contact.html');
router.add(404, '/pages/404.html');

router.handle();

window.onpopstate = () => router.handle(); // onpopstate é uma função para avançar e retroceder a navegação pelo botão do navegador
window.route = () => router.route();
