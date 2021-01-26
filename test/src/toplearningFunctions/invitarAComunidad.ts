import { WebDriver } from "selenium-webdriver";
import { delay, findByXpath, waitForElementByXpath } from "../util/util";

const explorarBtn = '//div[@class="main-center display-block contain-navigators ng-star-inserted"]/button[1]';
const entrarComunidad = '//p[contains(text(), "Comunidad automatica")]/../../../div[1]';
const invitarBtn = '//app-community-detail/mat-toolbar/div[3]/button[2]';
const inputNombreEnFiltro = '//input[@placeholder="Escriba el nombre que quiera buscar"]';
const suscribirSlideBtn = '//div[@class="mat-slide-toggle-bar"]';
const cerrarBtn = '//span[contains(text(), "Cerrar")]';
const comprobarInvitacion = '//p[contains(text(), "Perdomo Perdomo")]';



export async function invitarAComunidad (driver: WebDriver) {

    console.info("Invitar a una comunidad iniciando");

    await findByXpath(driver, explorarBtn).click();

    await delay();

    await findByXpath(driver, entrarComunidad).click();

    await delay();

    await findByXpath(driver, invitarBtn).click();

    await delay();

    await findByXpath(driver, inputNombreEnFiltro).sendKeys("Perdomo")

    await delay(2000);

    await findByXpath(driver, suscribirSlideBtn).click();

    await findByXpath(driver, cerrarBtn).click();

    const isNotified = await waitForElementByXpath(driver, comprobarInvitacion).catch(e => false);

    if (isNotified === false) {

        console.log('\x1b[31m', 'Invitacion a la comunidad fallida', '\x1b[0m');

    } else {

        console.log('\x1b[32m', 'Invitacion a la comunidad exitosa', '\x1b[0m');
    }

    console.info("Invitar a una comunidad terminado");



}