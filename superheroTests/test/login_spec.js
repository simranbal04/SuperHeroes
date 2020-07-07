// // Tests for Login Page

// // Page Object File
// var LoginPage = require('../page-objects/login_page') // Update to your page object

// describe('Login Page Tests', function() {
//     var loginPage

//     beforeEach(function () {
//         loginPage = new LoginPage()

//         // Since this is not an Angular Site
//         browser.ignoreSynchronization = true

//         // Open URL
//         browser.get('https://glitchitsystem.com/superhero/') // Update to your URL
//     })

//     afterEach(function () {

//     })

//     it('should display all Login page elements', function() {
//         expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true)
//         expect(loginPage.loginTitleTxt.getText()).toEqual('Welcome. Please Log In.')

//         expect(loginPage.emailFldLbl.isDisplayed()).toBe(true)
//         expect(loginPage.emailFld.isDisplayed()).toBe(true)
//         expect(loginPage.emailFld.getText()).toEqual('')
        
//         expect(loginPage.passwordFldLbl.isDisplayed()).toBe(true)
//         expect(loginPage.passwordFld.isDisplayed()).toBe(true)
//         expect(loginPage.passwordFld.getText()).toEqual('')
        
//         expect(loginPage.rememberChkLbl.isDisplayed()).toBe(true)
//         expect(loginPage.rememberChk.isDisplayed()).toBe(true)
//         expect(loginPage.rememberChk.isSelected()).toBe(false)
        
//         expect(loginPage.submitBtn.isDisplayed()).toBe(true)
//     })

//     it('should display error message when no email and password entered', function() {
//         loginPage.submitBtn.click()

//         expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
//         expect(loginPage.loginErrorMsg.getText()).toEqual('An e-mail and password are required.1')
//     })

//     it('should display error message when no password entered', function() {
//         loginPage.emailFld.sendKeys('tester@glitchitsystem.com')
//         loginPage.submitBtn.click()

//         expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
//         expect(loginPage.loginErrorMsg.getText()).toEqual('An e-mail and password are required.')
//     })

//     it('should display error message when no email entered', function() {
//         loginPage.passwordFld.sendKeys('fakepassword')
//         loginPage.submitBtn.click()

//         expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
//         expect(loginPage.loginErrorMsg.getText()).toEqual('An e-mail and password are required.1')
//     })

//     it('should log user in', function() {
//         loginPage.emailFld.sendKeys('tester@glitchitsystem.com')
//         loginPage.passwordFld.sendKeys('fakepassword')
//         loginPage.submitBtn.click()


//         // ToDo - Verify the Page elements changed
//     })
// })