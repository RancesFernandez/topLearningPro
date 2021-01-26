import { WebDriver } from "selenium-webdriver";
import { delay, findByXpath } from "../util/util";

const planDeEstudiosBtn = '//div[@class="main-center display-block contain-navigators ng-star-inserted"]/button[2]';
const todosLosPlanesBtn = '//mat-tab-group/mat-tab-header/div[2]/div/div/div[2]/div';
const agregarUsuarioBtn = '//mat-tab-body[2]/div/div/app-card-study-plan/div/mat-card/mat-card-content/p[contains(text(), " Plan de estudios automatico ")]/../..//*/button[3]';
const inputEmailToSearch = '//mat-dialog-container//*/input';
const agregarKylian = '//mat-dialog-container//*/mat-card/button';
const guardarBtn = '//mat-dialog-container//*/mat-dialog-actions/button[2]';

export async function agregarUsuarioAPlanDeEstudios (driver: WebDriver) {

    console.info('Agregar Usuario a plan de estudio iniciando');

    await findByXpath(driver, planDeEstudiosBtn).click();

    await delay();

    await findByXpath(driver, todosLosPlanesBtn).click();

    await delay(3000);

    await findByXpath(driver, agregarUsuarioBtn).click();

    await delay(3000);

    await findByXpath(driver, inputEmailToSearch).sendKeys('kylian10');

    await delay();

    await findByXpath(driver, agregarKylian).click();

    await delay(3000);

    await findByXpath(driver, guardarBtn).click();

    console.info('Agregar usuario a plan de estudio finalizado');
}