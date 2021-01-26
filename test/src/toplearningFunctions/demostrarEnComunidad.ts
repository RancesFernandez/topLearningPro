import { WebDriver } from "selenium-webdriver";
import { delay, findByCss, findByXpath, waitForElementByXpath } from "../util/util";

const explorarBtn = '//div[@class="main-center display-block contain-navigators ng-star-inserted"]/button[1]';
const entrarComunidad = '//p[contains(text(), "Comunidad automatica")]/../../../div[1]';
const demostrarBtn = '//div/div/div/div[5]/div';
const adjuntarEvidenciaBtn = '(//mat-toolbar)[2]/div/div/button';
const imagenBtn = '(//mat-dialog-content//*/mat-button-toggle)[3]/button';
const usarUnsplashBtn = '//span[@class="mat-button-wrapper"][contains(text(), "USAR UNSPLASH")]';
const inputNombreUnsplash = 'input[placeholder= "Ingrese el término a buscar..."]';
const selectImg = 'img.img-gallery';
const inputNombreDeEvidencia = '//mat-form-field/div/div/div/input';
const guardarBtn = '//mat-dialog-actions/button[2]';
const verificarEvidencia = '//mat-card-title[contains(text(), "Evidencia Automatica")]';




export async function demostrarEnComunidad (driver: WebDriver) {

    console.info('Creacion de evidencia iniciando');

    await findByXpath(driver, explorarBtn).click();

    await delay(3000);

    await findByXpath(driver, entrarComunidad).click();

    await delay();

    await findByXpath(driver, demostrarBtn).click();

    await delay(3000);

    await findByXpath(driver, adjuntarEvidenciaBtn).click();

    await delay();

    await findByXpath(driver, imagenBtn).click();

    await delay();

    await findByXpath(driver, usarUnsplashBtn).click();

    await delay();

    await findByCss(driver, inputNombreUnsplash).sendKeys('Evidence');

    await delay();

    await findByCss(driver, selectImg).click();

    await delay();

    await findByXpath(driver, inputNombreDeEvidencia).sendKeys('Evidencia Automatica');

    await delay();

    await findByXpath(driver, guardarBtn).click();

    const isNotified = await waitForElementByXpath(driver, verificarEvidencia).catch(e => false);

    if (isNotified === false) {

        console.log('\x1b[31m', 'Creacion de evidencia fallida', '\x1b[0m');

    } else {

        console.log('\x1b[32m', 'Creacion de evidencia exitosa', '\x1b[0m');
    }

    console.info('Creacion de evidencia finalizado');

}