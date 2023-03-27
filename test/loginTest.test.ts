import {driverInstance} from "../src/core/driver";
import {loginPage} from "../src/pages/login.page";

describe('Feature Login', () => {

    beforeAll(async () => {
        await driverInstance.start();
    });
    afterAll(async () => {
        await driverInstance.closeDriver();
    });
    it('Login page and go to shop yoga', async () => {
        await loginPage.clickOnLogin()
        await driverInstance.waitTime(5000);
        await loginPage.setEmail("yerel.hurtado@gmail.com");
        await loginPage.setPassword("BgEhae47596**");
        await loginPage.clickOnLoginWithValues();
        await driverInstance.waitTime(5000);
        await loginPage.clickOnShopYoga();
        await driverInstance.waitTime(5000);
    }, 70000);
});