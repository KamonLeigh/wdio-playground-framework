/* jshint undef: true, unused: true */
/* globals browser*/
/* globals $*/

"use strict";
 const expect = require("chai").expect;
 const login = require("./sandbox/pages/login.page");
 const button  = require("./sandbox/pages/button.page");
 const comboBox = require("./sandbox/pages/comboBox");
 const input  = require("./sandbox/pages/input.page");

before(() => {
    browser.url("/");
    browser.pause(5000);

    browser.waitForExist("input[class^='form-control']");

    login.login();



    button.genericButton("a[href='#/services']");
    button.genericButton("a[href$='qa']");

    browser.click("a[href$='qa']");


    browser.click("a[href$='-staging']");


    browser.waitForExist(".service-table-heading ");
    browser.moveToObject(".table-cell-link-primary.text-overflow");
    browser.click(".icon.icon-neutral");

    browser.pause(5000);

    const tabs = browser.getTabIds();
    browser.switchTab(tabs[tabs.length - 1]);

});

beforeEach(() => {
    browser.setViewportSize({
        width: 1200,
        height: 900
    });

    browser.pause(4000);
    browser.waitForExist("#login_username");

    const nameMed = $("#login_username");
    const passwordMed  = $("#login_password");
    //@TODO make a single using the Login class
    nameMed.setValue();
    passwordMed.setValue();

    browser.click("button#landing-login");

    browser.pause(5000);

    browser.click("#nav-left-adtags");
    browser.click("#module-tab-onetag_tags");

    browser.waitForExist("div.ReactVirtualized__Table__row:first-child");

});


afterEach(() => {
    browser.click(".small-6#user-menu div.user-data");
    browser.click(".small-6#user-menu li.popup-option-item");
});




describe("TEST", () => {

    it("create whitespace", () => {

        browser.addValue("div.onetag-list-search input", "sourcelabs");

        browser.element("div.ReactVirtualized__Table__row:first-child");
        browser.click("div.ReactVirtualized__Table__rowColumn:nth-child(3)");


        /* Manage Container */
        button.genericButton("span.circle-icon");
        browser.waitForExist("div.form-element-container");
        browser.pause(5000);


        input.inputText("vet");

        button.next();

        /* What integration do you want? */
        button.genericButton("div.Select-placeholder");


        /* What integration do you want?  */
        comboBox.selectFromComboBox("div=VET Reload");


        // What ad size?
        browser.click("button*=Nex");

        browser.pause(2000);

        /* Who will manage your demand?  */
        comboBox.selectFromComboBox("div=Sovrn");
        button.next();
        browser.pause(2000);


        /* What is the ad size? */
        comboBox.selectFromComboBox("div=300x250 - Medium Rectangle");
        button.next();


        /* Managing Content: 'container' */
        input.inputText("#body");

        button.next();
        button.clickNextRepeat(4);
        button.save();
        const isVisible = browser.isVisible("h2=Manage Container");
        button.remove();

        /* Remove Tag confirmation */
        browser.pause(5000);

        browser.element("button.rrt-button.rrt-ok-btn").click()

        expect(isVisible).to.equal(true);

    });

});



