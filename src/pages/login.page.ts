import {BasePage} from "./base.page";
import { ElementActions } from "../core/element-actions";

class LoginPage extends BasePage {
    private email: string = '#email';
    private password: string = '#pass';
    private signInButton: string = "//div[@class='panel header']//li[@class='authorization-link']/a";
    private signInButtonWithElements: string = "#send2";
    private shopYogaButton: string = "#maincontent > div.columns > div > div.widget.block.block-static-block > div.blocks-promo > a > span > span.action.more.button";
    constructor() {
        super();
    }
    async setEmail(text: string) {
        await ElementActions.setText(this.email, text);
    }

    async setPassword(text: string) {
        await ElementActions.setText(this.password, text);
    }
    async clickOnLogin() {
        await ElementActions.click(this.signInButton)
    }
    async clickOnLoginWithValues() {
        await ElementActions.click(this.signInButtonWithElements)
    }
    async clickOnShopYoga() {
        await ElementActions.click(this.shopYogaButton)
    }
}

export const loginPage = new LoginPage();