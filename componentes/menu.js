Vue.component('menulateral', {
    template: `
    <div>
    <div id="wrapper">
                <!-- Sidebar -->
                <div id="sidebar-wrapper">
                    <ul class="sidebar-nav">
                        <li class="sidebar-brand">
                            <a href="#">
                                Menu
                            </a>
                        </li>
                        
                        <li>
                            <router-link to="/">
                                ventas
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/inventario">
                                inventario
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/one">
                                one
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
                
    `
});

