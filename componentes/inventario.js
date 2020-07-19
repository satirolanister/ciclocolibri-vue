Vue.component('inventario', {
    template: `
    <div>
    <div id="caja" class="container mt-2 caja">
    <div class="row">
        <div class="rol-md-6 col-xs-12">
            <h1 class="mr-3">hola</h1>
        </div>
        <div class="rol-md-6 col-xs-12">
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
            <table class="table table-bordered table-dark mt-2">
                <thead class="thead-light">
                    <tr>
                        <th>
                            nombre
                        </th>
                        <th>
                            user name
                        </th>
                        <th>
                            correo
                        </th>
                    </tr>
                    <tr>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="dato in posts">
                        <td v-text="dato.name"></td>
                        <td v-text="dato.username"></td>
                        <td v-text="dato.email"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div> 
    </div>          
    `,
    data() {
        return {
            posts: []
        }

    },
    created() {
        var that = this;
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                that.posts = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
});