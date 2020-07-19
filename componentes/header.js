Vue.component('cabecera', {
    template: `
    <div>
    <header>
            <section class="cabecera">
                <nav class="navbar navbar-dark bg-dark">
                    <div class="nav-div">
                        <a class="btn" id="menu-toggle">
                            <img class="imagen" src="./img/colibri.png" />
                        </a>
                        <a class="navbar-brand m-1 text-uppercase">Ciclocolibri</a>
                    </div>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </nav>
            </section>
        </header>
    </div>
    `
})

