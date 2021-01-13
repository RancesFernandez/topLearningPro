import { WebDriver } from "selenium-webdriver";
import { delay, findByXpath, waitForElementByXpath } from "../util/util";

const explorarBtn = '//div[@class="main-center display-block contain-navigators ng-star-inserted"]/button[1]';
const entrarComunidad = '//p[contains(text(), "Comunidad automatica")]/../../../div[1]';
const inputTextoACompartir = '//mat-card//*/textarea';
const publicarBtn = '(//mat-card//*/button)[4]';
const publicacion = '(//mat-card)[2]';

export async function publicarEnLaComunidad (driver: WebDriver) {

    console.info('Publicar en la comunidad iniciando');

    await findByXpath(driver, explorarBtn).click();

    await delay(3000);

    await findByXpath(driver, entrarComunidad).click();

    await delay();

    await findByXpath(driver, inputTextoACompartir).sendKeys('Publicacion automatica');

    await delay(3000);

    await findByXpath(driver, publicarBtn).click();

    const isNotified = await waitForElementByXpath(driver, publicacion).catch(e => false);

    if (isNotified === false) {

        console.log('\x1b[31m', 'Publicacion fallida', '\x1b[0m');

    } else {

        console.log('\x1b[32m', 'Publicacion exitosa', '\x1b[0m');
    }

    console.info("Publicar en una comunidad terminado");

}