import { WebDriver } from "selenium-webdriver";
import { delay, findByCss, findByXpath, waitForElementByCss, waitForElementByXpath } from "../util/util";

const loginBtn = '//span[contains(text(), "INICIAR SESIÓN")]';
const inputEmail = 'input[placeholder="correo@host.com"]';
const inputPassword = 'input[placeholder="123456"]';
const submitBtn = '//button[@type="submit"]/span[@class= "mat-button-wrapper"]';
const checkUserName = '//span[1][contains(text(), "Elena10")]';

export async function loginToplearningTC(driver: WebDriver) {

    await driver.get("https://toplearningpro.firebaseapp.com/es/home");

    await waitForElementByXpath(driver, loginBtn);

    await findByXpath(driver, loginBtn).click();

    await delay();

    await findByCss(driver, inputEmail).sendKeys("rances.fernandez@yahoo.com");

    await delay(2000);

    await findByCss(driver, inputPassword).sendKeys("Asd123456789!");

    await delay(3000);

    await findByXpath(driver, submitBtn).click();

    await delay(2000);

    const isNotifiyed = await waitForElementByXpath(driver, checkUserName).catch(e => false);

    if (isNotifiyed === false) {

        console.log('\x1b[31m', 'Login failed', '\x1b[0m');

    } else {

        console.log('\x1b[42m', 'Login successfully', '\x1b[0m');
    }










    
}