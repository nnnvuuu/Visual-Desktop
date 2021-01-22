/**
 * Dependency Modules
 */
require('chromedriver');
var assert = require("assert").strict;
var chrome = require('selenium-webdriver/chrome');
var webdriver = require("selenium-webdriver");
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
require("geckodriver");

// Application Server
const serverUri = "http://localhost:3000/#";
const appTitle = "React Selenium App";

/**
 * Config for Chrome browser
 * @type {webdriver}
 */
var browser = new webdriver.Builder()
 .usingServer()
 .withCapabilities({ browserName: "chrome" })
 .build();

/**
 * Config for Firefox browser (Comment Chrome config when you intent to test in Firefox)
 * @type {webdriver}
 */
/*
var browser = new webdriver.Builder()
 .usingServer()
 .withCapabilities({ browserName: "firefox" })
 .build();
 */

/**
 * Function to get the title and resolve it it promise.
 * @return {[type]} [description]
 */
function logTitle() {
 return new Promise((resolve, reject) => {
  browser.getTitle().then(function(title) {
   resolve(title);
  });
 });
}

/**
 * Sample test case
 * To check whether the given value is present in array.
 */
describe("Array", function() {
 describe("#indexOf()", function() {
  it("should return -1 when the value is not present", function() {
   assert.equal([1, 2, 3].indexOf(4), -1);
  });
 });
});

describe("Home Page", function() {
 /**
  * Test case to load our application and check the title.
  */
 it("Should load the home page and see the cat loaded", function() {
  this.timeout(10000) 
  return new Promise((resolve, reject) => {
   browser
    .get(serverUri)
    .then(logTitle)
    .then(title => {
     assert.strictEqual(title, appTitle);
     resolve();
    })
    .catch(err => reject(err));
  });
 });

/**
  * Test case to check whether the given element is loaded.
  */
 it("Should check whether the given page is loaded and giving facts ", function() {
    this.timeout(10000) 
  return new Promise((resolve, reject) => {
      
   browser
    .findElement({ id: "root" })
    .then(elem => resolve())
    .catch(err => reject(err));

  });
 });

/**
  * End of test cases use.
  * Closing the browser and exit.
  */
 after(function() {
  // End of test use this.
  browser.quit();
 });
});


/**
 * Dependency Modules
 */
var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("geckodriver");