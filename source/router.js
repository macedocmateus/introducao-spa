export class Router {
    routes = {};

    add(routeName, page) {
        this.routes[routeName] = page;
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();

        window.history.pushState({}, '', event.target.href);

        this.handle();
    }

    handle() {
        // const pathname = window.location.pathname; // forma não desestruturada
        // const { pathname } = window.location; // forma desestruturada

        const { pathname } = window.location; // desestruturação variada com funções vindas do .location
        const route = this.routes[pathname] || this.routes[404];

        fetch(route)
            .then((data) => data.text())
            .then((html) => {
                document.querySelector('#app').innerHTML = html;
            });
    }
}
