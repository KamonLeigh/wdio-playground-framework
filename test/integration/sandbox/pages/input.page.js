class Input {

    get input() { return "input[type='text']"};


    inputText(text){
        browser.waitForExist(this.input);
        browser.addValue(this.input ,text)
    }
}

module.exports = new Input();