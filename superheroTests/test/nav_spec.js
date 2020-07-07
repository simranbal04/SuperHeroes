// var NavPage = require('../page-objects/nav_page')
// var LoginPage = require('../page-objects/login_page')

// describe('', function () {
//     var navPage
//     var loginPage

//     beforeEach(function () {
//         navPage = new NavPage()
//         loginPage = new LoginPage()

//         browser.ignoreSynchronization = true

//         // Open URL
//         browser.get('https://glitchitsystem.com/superhero/') 
//     })

//     afterEach(function () {

//     })

//     it('should display all Nav elements', function () {
//         loginPage.emailFld.sendKeys('tester@glitchitsystem.com')
//         loginPage.passwordFld.sendKeys('fakepassword')
//         loginPage.submitBtn.click()

//         expect(navPage.homeLnk.isDisplayed()).toBe(true)
//         expect(navPage.logoutLnk.isDisplayed()).toBe(true)

//         expect(navPage.heroFactsLnk.isDisplayed()).toBe(true)
//         navPage.heroFactsLnk.click()
//         expect(navPage.wolverineOption.isDisplayed()).toBe(true)
//         expect(navPage.spidermanOption.isDisplayed()).toBe(true)
//     })

//     it('should display and close wolverine modal', function () {
//         loginPage.emailFld.sendKeys('tester@glitchitsystem.com')
//         loginPage.passwordFld.sendKeys('fakepassword')
//         loginPage.submitBtn.click()

//         navPage.heroFactsLnk.click()
//         navPage.wolverineOption.click()

//         browser.sleep(1000)

//         expect(navPage.wolverineModalTitle.isPresent()).toBeTruthy()
//         expect(navPage.wolverineModalTitle.getText()).toEqual('Wolverine Fact')

//         expect(navPage.wolverineModalBody.isPresent()).toBeTruthy()
//         expect(navPage.wolverineModalBody.getText()).toEqual('Wolverine made his first comic book appearance in 1974.')

//         expect(navPage.wolverineModalCloseBtn.isPresent()).toBeTruthy()
//         expect(navPage.wolverineModalXBtn.isDisplayed()).toBe(true)

//         navPage.wolverineModalCloseBtn.click()
//     })

//     it('should display and close Spider-Man modal', function () {
//         loginPage.emailFld.sendKeys('tester@glitchitsystem.com')
//         loginPage.passwordFld.sendKeys('fakepassword')
//         loginPage.submitBtn.click()

//         navPage.heroFactsLnk.click()
//         navPage.spidermanOption.click()

//         browser.sleep(1000)

//         expect(navPage.spidermanModalTitle.isPresent()).toBeTruthy()
//         expect(navPage.spidermanModalTitle.getText()).toEqual('Spider-Man Fact')

//         expect(navPage.spidermanModalBody.isPresent()).toBeTruthy()
//         expect(navPage.spidermanModalBody.getText()).toEqual('Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.')

//         expect(navPage.spidermanModalCloseBtn.isPresent()).toBeTruthy()
//         expect(navPage.spidermanModalXBtn.isDisplayed()).toBe(true)

//         navPage.spidermanModalCloseBtn.click()
//     })

//     it('should display Login page without email and pass', function () {
//         loginPage.emailFld.sendKeys('tester@glitchitsystem.com')
//         loginPage.passwordFld.sendKeys('fakepassword')
//         loginPage.submitBtn.click()

//         navPage.logoutLnk.click()

//         expect(loginPage.emailFld.getText()).toEqual('')
//         expect(loginPage.passwordFld.getText()).toEqual('')
//     })

//     it('should display Login page with email and pass', function () {
//         loginPage.emailFld.sendKeys('tester@glitchitsystem.com')
//         loginPage.passwordFld.sendKeys('fakepassword')
//         loginPage.rememberChk.click()
//         loginPage.submitBtn.click()

//         navPage.logoutLnk.click()

//         expect(loginPage.emailFld.getAttribute('value')).toEqual('tester@glitchitsystem.com')
//         expect(loginPage.passwordFld.getAttribute('value')).toEqual('fakepassword')
//         expect(loginPage.rememberChk.isSelected()).toBe(true)
//     })

//     it('should display alert for not found', function () {
//         loginPage.emailFld.sendKeys('tester@glitchitsystem.com')
//         loginPage.passwordFld.sendKeys('fakepassword')
//         loginPage.rememberChk.click()
//         loginPage.submitBtn.click()

//         navPage.searchFld.sendKeys('Bob')
//         navPage.searchBtn.click()

//         var EC = protractor.ExpectedConditions
//         browser.wait(EC.alertIsPresent(), 3000)

//         expect(browser.switchTo().alert().getText()).toEqual('Your search for Bob returned 0 reults. Try something else.')
//         browser.switchTo().alert().accept()
//     })

//     it('should display alert for found', function () {
//         loginPage.emailFld.sendKeys('tester@glitchitsystem.com')
//         loginPage.passwordFld.sendKeys('fakepassword')
//         loginPage.rememberChk.click()
//         loginPage.submitBtn.click()

//         navPage.searchFld.sendKeys('Wolverine')
//         navPage.searchBtn.click()

//         var EC = protractor.ExpectedConditions
//         browser.wait(EC.alertIsPresent(), 3000)

//         expect(browser.switchTo().alert().getText()).toEqual('Wolverine is awesome!')
//         browser.switchTo().alert().accept()
//     })

// })