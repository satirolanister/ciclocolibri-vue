const home = {
    template: `
<div>
    <ventas></ventas>
</div>
`
};
const inventario = {
    template: `
<div>
    <inventario></inventario>
</div>
`
};
const one = {
    template: `
<div>
    <h1>hola one</h1>
</div>
`
};

const router = new VueRouter({
    routes: [{
            path: '/ventas',
            component: home
        },
        {
            path: '/inventario',
            component: inventario
        },
        {
            path: '/one',
            component: one
        }
    ]
});

function load() {
    new Vue({
    router
    }).$mount('#app');
};

