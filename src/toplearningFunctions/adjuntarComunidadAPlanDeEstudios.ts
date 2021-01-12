import { WebDriver } from "selenium-webdriver";
import { delay, findByXpath } from "../util/util";
import { agregarRecursosAComunidad } from "./agregarRecursosAComunidad";

const explorarBtn = '//div[@class="main-center display-block contain-navigators ng-star-inserted"]/button[1]';
const menuComunidad = '//p[contains(text(), "Comunidad automatica")]/../../div[1]/div[2]/button';
const agregarAPlanDeEstudiosBtn = '//div/div/div/button[2]';
const buscarPlanDeEstudio = '(//mat-form-field/div/div/div/input)[2]';
const toggleBtn = '//mat-card/mat-slide-toggle/label/div/div';
const cerrarBtn = '//mat-dialog-actions/button';


export async function adjuntarComunidadAPlanDeEstudios (driver: WebDriver) {

    await findByXpath(driver, explorarBtn).click();

    await delay();

    await findByXpath(driver, menuComunidad).click();

    await delay(3000),

    await findByXpath(driver, agregarAPlanDeEstudiosBtn).click();

    await delay(3500);

    await findByXpath(driver, buscarPlanDeEstudio).sendKeys("Plan de estudios automatico");

    await delay(3000);

    await findByXpath(driver, toggleBtn).click();

    await delay(3000);

    await findByXpath(driver, cerrarBtn).click();

}