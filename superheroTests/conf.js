exports.config = {
    // framework: 'jasmine2',
    // seleniumAddress: 'https://localhost:4444/wd/hub',
   


    capabilities:
    {
        browserName: 'chrome'
    },

    specs: [
        './test/*.js'
    ],

    jasmineNodeOts: {
        showColors: true
    },

    useAllAngular2AppRoots: true,
    framework: 'jasmine',
    
    onPrepare: function() {
 
        // By default, Protractor use data:text/html,<html></html> as resetUrl, but 
        // location.replace from the data: to the file: protocol is not allowed
        // (we'll get ‘not allowed local resource’ error), so we replace resetUrl with one
        // with the file: protocol (this particular one will open system's root folder)
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.sleep(5000); 
        browser.resetUrl = 'file:///Users/simrankaurbal/protactor/superhero/index.html';
    }
};