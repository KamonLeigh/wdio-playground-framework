class Login {

    get name(){ return  $("input[class^='form-control']")}
    get password(){return $("input[type^='password']")}
    get submit(){return $(".button-primary")}

    login(name, password){
        this.name.setValue(name);
        this.password.setValue(password);

        this.submit.click();
    }

}





module.exports = new Login();