import { Builder, By, until, WebDriver, WebElement } from "selenium-webdriver";


/**
 *  @param timeout 5000 milliseconds by default
 * 
 *  @returns A Promise resolved after timeout
 */
export function delay (timeout = 5000) {
    return new Promise ( (resolve) => setTimeout(resolve, timeout) );
}

export function findByCss(driver:WebDriver, css:string) {
   return driver.findElement(By.css(css));
}

export function findByXpath(driver:WebDriver, xpath:string) {
    return driver.findElement(By.xpath(xpath));
}

export async function openApp() {

    const driver = await new Builder().forBrowser('chrome').build(); 
    await driver.manage().window().maximize(); 
    return driver;
}


export function closeApp(driver:WebDriver) {
    return driver.quit();
}

export async function restartApp(driver:WebDriver) {
    await closeApp(driver).catch(e => e); 
    await delay();
    const newDriver = await openApp();
    return newDriver;
}

export async function findElementsByCssAndSearchText(driver:WebDriver, css: string, text: string) {
    let element: WebElement;
    const elements = await findElementsByCss( driver, css );
    const promises = elements.map( async e => {
        if (await e.getText() === text) {
            element = e;
        }
    });
    await Promise.all( promises );
    return element;
}

export function findElementsByCss(driver:WebDriver, css:string) {
    return driver.findElements( By.css( css ) );
}

export async function findElementInPaging(driver: WebDriver, xpathToFind: string): Promise<WebElement>{

    const element = await findByXpath(driver, xpathToFind).catch( () => null );
    
    if (element === null) {
        const pageChanged = await nextPage( driver );
        if (pageChanged) {
            return findElementInPaging(driver, xpathToFind);
        }
        return null;
    }
    return element;
}

export async function nextPage( driver: WebDriver ) {
    const nextBtn = '//ul[@class="pagination"]/li/span[contains(text(),">")]/..';
    const btn = await findByXpath(driver, nextBtn);
    const currentClass = await btn.getAttribute('class');
    if (currentClass.includes('disabled')) {
        return false;
    }
    await driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
    await btn.click();
    await delay(7000);
    return true;
}

export async function waitForElementByXpath(driver: WebDriver, xpath: string, timeout = 20000) {
    return driver.wait( until.elementLocated(By.xpath(xpath)), timeout );
}

export async function waitForElementByCss(driver: WebDriver, css: string, timeout = 20000) {
    return driver.wait( until.elementLocated(By.css(css)), timeout);
}


