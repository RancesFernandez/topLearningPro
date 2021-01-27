import { WebDriver } from "selenium-webdriver";
import { delay, findByXpath, waitForElementByXpath } from "../util/util";

const explorarBtn = '//div[@class="main-center display-block contain-navigators ng-star-inserted"]/button[1]';
const entrarComunidad = '//p[contains(text(), "Comunidad automatica")]/../../../div[1]';
const aprenderBtn = '//div/div/div/div[2]/div';
const tema1Card = '(//div/mat-card)[2]';
const verRecurso = '//mat-card/mat-card-footer/button';
const notificacionPorTerminarRecurso = '//div[@class="completed_resource ng-star-inserted"]';
const imprimirCertificadoBtn = '//div[@class="community-container"]//*/button[1]';


export async function aprenderEnComunidad (driver: WebDriver) {

    console.info('Aprender en Comunidad iniciando');

    await delay(3500);

    await findByXpath(driver, explorarBtn).click();

    await delay();

    await findByXpath(driver, entrarComunidad).click();

    await delay(2500);

    await findByXpath(driver, aprenderBtn).click();

    await delay();

    await findByXpath(driver, tema1Card).click();

    await delay();

    await findByXpath(driver, verRecurso).click();

    await delay(3000);

    const isNotified = await waitForElementByXpath(driver, notificacionPorTerminarRecurso).catch(e => false);

    if (isNotified === false) {

        console.log('\x1b[31m', 'Recurso terminado fallido', '\x1b[0m');

    } else {

        console.log('\x1b[32m', 'Recurso terminado exitoso', '\x1b[0m');
    }
    
    await delay();

    await findByXpath(driver, aprenderBtn).click();

    await delay(4000);

    const isNotified2 = await waitForElementByXpath(driver, imprimirCertificadoBtn).catch(e => false);

    if (isNotified === false) {

        console.log('\x1b[31m', 'Mostrar imprimir certificado fallido', '\x1b[0m');

    } else {

        console.log('\x1b[32m', 'Mostrar imprimir certificado exitoso', '\x1b[0m');
    }

    console.info('Aprender en comunidad finalizado');

}