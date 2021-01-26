import { WebDriver } from "selenium-webdriver";
import { delay, findByCss, findByXpath } from "../util/util";

const sugerirComunidadBtn = '//span[@class="mat-button-wrapper"][contains(text(), "SUGERIR COMUNIDAD")]';
const selAreaDelConocimiento = '//mat-dialog-container//*/mat-select[1]';
const selIngenieria = '//mat-option[1]/span[@class="mat-option-text"]';
const selCarrera = '//mat-dialog-container//*/mat-form-field[2]//*/mat-select';
const selIndustrial = '//mat-option[1]/span[@class="mat-option-text"]';
const inputNombreComunidad = 'input#mat-input-2';
const guardarBtn = '//mat-dialog-container//*/span[contains(text(), "GUARDAR")]';



export async function sugerirComunidadTC (driver: WebDriver) {

    console.info("Sugerir comunidad iniciando");

    findByXpath(driver, sugerirComunidadBtn).click();

    await delay();

    await findByXpath(driver, selAreaDelConocimiento).click();

    await delay(2000);

    await findByXpath(driver, selIngenieria).click();

    await delay(3000);

    await findByXpath(driver, selCarrera).click();

    await delay(2000);

    await findByXpath(driver, selIndustrial).click();

    await delay(3000);

    await findByCss(driver, inputNombreComunidad).sendKeys("Comunidad automatica de industrial");

    await delay();

    await findByXpath(driver, guardarBtn).click();

    console.info("Sugerir comunidad terminado");

    



    






}