// var HeaderPage = require('../page-objects/header_page')
// var LoginPage = require('../page-objects/login_page')

// describe('Header Page', function () {
//     var headerPage
//     var loginPage

//     beforeEach(function () {
//         headerPage = new HeaderPage()
//         loginPage = new LoginPage()

//         browser.ignoreSynchronization = true

//         // Open URL
//         browser.get('https://glitchitsystem.com/superhero/') 
//     })

//     afterEach(function () {

//     })

//     it('should contain all Header elements', function () {
//         loginPage.emailFld.sendKeys('tester@glitchitsystem.com')
//         loginPage.passwordFld.sendKeys('fakepassword')
//         loginPage.submitBtn.click()

//         expect(headerPage.headerTitle.isDisplayed()).toBe(true)
//         expect(headerPage.headerTitle.getText()).toEqual('Superhero Roster')

//         expect(headerPage.headerImage.isDisplayed()).toBe(true)
        
//         expect(headerPage.headerBody.isDisplayed()).toBe(true)
//         expect(headerPage.headerBody.getText()).toEqual('Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.')
//     })
// })