class Button {

    constructor(){
        this.nextButton = "button=Next";
        this.saveButton = "button=Save";
        this.backButton = "button=Back";
        this.removeButton = "button=Remove";
        this.cancelButron = "button=Cancel";
        this.addRowButton = "button=Add row";

    }


    clickNextRepeat(number){
        for(let i = 1; i <= number; i++){

            browser.pause(2000);
            browser.waitForExist(this.nextButton, 5000);
            browser.click(this.nextButton);

        }
    }

    genericButton(element){
        browser.pause(5000);
        browser.waitForExist(element);
        browser.click(element);
    }

    next(){
        this.genericButton(this.nextButton);
    }

    save(){
       this.genericButton(this.saveButton);
    }

    back(){
        this.genericButton(this.backButton);
    }

    remove(){
        this.genericButton(this.removeButton);
    }

    canel(){
        this.genericButton(this.cancelButron);
    }

    addRow(){
       this.genericButton(this.addRowButton)
    }

}


module.exports = new Button() ;