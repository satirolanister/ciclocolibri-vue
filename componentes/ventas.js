Vue.component('ventas', {
    template: `
    <div>
    <header class="form-cabecera">MINIMALISTIC FORM</header>

    <form id="form" class="topBefore">
		
		  <input id="name" type="text" placeholder="NAME">
		  <input id="email" type="text" placeholder="E-MAIL">
          <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
          <br>
          <input id="submit" type="submit" value="GO!">
  
    </form>
    </div>          
    `,
    data(){
        return{
            datos: []
        }
        
    },
    created(){
        
      }
});

