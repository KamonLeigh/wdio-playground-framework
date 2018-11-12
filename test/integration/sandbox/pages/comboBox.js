class ComboBox {

    selectFromComboBox(element){
        browser.element(".form-element-container").waitForVisible(".Select-control");
        browser.element(".form-element-container").click(".Select-control");
        browser.element(".form-element-container .Select-menu-outer").click(element);

    }

}





module.exports = new ComboBox();