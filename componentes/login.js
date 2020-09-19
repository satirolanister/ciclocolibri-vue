Vue.component('login', {
    template: `
    <div class="top">
        
        <form action="">
        <div class="form-group">
        <label for="email" class="text-white">Email address:</label>
        <input type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
        <label for="pwd" class="text-white">Password:</label>
        <input type="password" class="form-control" id="pwd">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>
    `
});
