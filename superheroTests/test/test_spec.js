describe('Super Hero Page', function () {
    it('should load correct URL', function () {
        browser.ignoreSynchronization = true
        // open URL
       // browser.waitForAngularEnabled(false);
       browser.get('file:///Users/simrankaurbal/protactor/superhero/index.html');

        //Enter texts 
        element(by.id('loginEmail')).sendKeys('just')
        element(by.id('loginPassword')).sendKeys('Testing');

        browser.sleep(5000)
    })
})


