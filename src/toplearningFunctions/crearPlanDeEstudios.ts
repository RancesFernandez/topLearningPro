import { WebDriver } from "selenium-webdriver"
import { delay, findByXpath } from "../util/util";

const planDeEstudiosBtn = '//div[@class="main-center display-block contain-navigators ng-star-inserted"]/button[2]';
const crearPlanBtn = '//span[contains(text(), "CREAR PLAN")]';
const inputNombrePlan = '//mat-form-field/div/div/div/input';
const selArea = '//span[contains(text(), "Área")]';
const selIngenierias = '//span[contains(text(), "Ingenierías")]';
const crearBtn = '(//mat-dialog-actions/button)[2]';



export async function crearPlanDeEstudios (driver: WebDriver) {

    console.info("Creacion de plan de estudio iniciando");

    await findByXpath(driver, planDeEstudiosBtn).click();

    await delay(3000);

    await findByXpath(driver, crearPlanBtn).click();

    await delay(3000);

    await findByXpath(driver, inputNombrePlan).sendKeys("Plan de estudios automatico");

    await findByXpath(driver, selArea).click();

    await delay(2000);

    await findByXpath(driver, selIngenierias).click();

    await delay(2000);

    await findByXpath(driver, crearBtn).click();

    await delay();

    console.info("Creacion de plan de estudio finalizado");


    

}