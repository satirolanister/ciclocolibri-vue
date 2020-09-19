Vue.component('login', {
    template: `
    <div >
        <img src="./img/logo.jpg" class="rounded-circle mx-auto d-block m-4 logo">
        <br>
        <form action="">
        <div class="form-group">
        <label for="email" >Email address:</label>
        <input type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
        <label for="pwd" >Password:</label>
        <input type="password" class="form-control" id="pwd">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>
    `
});
