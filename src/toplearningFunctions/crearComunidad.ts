import { WebDriver } from "selenium-webdriver";
import { delay, findByCss, findByXpath, waitForElementByXpath } from "../util/util";

const crearComunidadBtn = '//span[@class="mat-button-wrapper"][contains(text(), "CREAR COMUNIDAD")]';
const usarUnsplashBtn = '//span[@class="mat-button-wrapper"][contains(text(), "USAR UNSPLASH")]';
const inputNombreUnsplash = 'input[placeholder= "Ingrese el término a buscar..."]';
const selectImg = 'img.img-gallery';
const inputNombreComunidad = 'input[placeholder= "Nombre de la comunidad"]';
const inputResumenComunidad = '//*/angular-editor/div/div/div';
const selAreaDelConocimiento = '#mat-expansion-panel-header-0';
const selIngenierias = '//div[contains(text(), " Ingenierías ")]';
const selCarrera = '#mat-expansion-panel-header-1';
const selIndustrial = '//div[contains(text(), "Industrial ")]';
const selIdioma = '#mat-expansion-panel-header-4';
const selEspanol = '//div[contains(text(), "Español")]';
const siguienteBtn = '//button[@type="submit"]/span/mat-icon';
const nombreDelTema = 'input[placeholder="Nombre del tema"]';
const palabrasClaves = 'input[placeholder="Topico ej. Industrial, Ingenierías , Comunidad automatica o sus palabras claves"]';
const crearComunidadFinalBtn = '//button[2][@type="submit"]/span';
const comprobarCreacion = '//span[contains(text(), "Comunidad automatica")]';

export async function crearComunidadTC (driver: WebDriver) {

    await findByXpath(driver, crearComunidadBtn).click();

    console.info('Crear comunidad iniciando');

    await delay();

    await findByXpath(driver, usarUnsplashBtn).click();

    await delay(3000);

    await findByCss(driver, inputNombreUnsplash).sendKeys("automatic");

    await delay();

    await findByCss(driver, selectImg).click();

    await delay();

    await findByCss(driver, inputNombreComunidad).sendKeys("Comunidad automatica");
    
    await delay(2500);
           
    await findByXpath(driver, inputResumenComunidad).sendKeys("Resumen automatico");
    
    await delay();

    await findByCss(driver, selAreaDelConocimiento).click();
   
    await findByXpath(driver, selIngenierias).click();

    await findByCss(driver, selCarrera).click();
   
    await findByXpath(driver, selIndustrial).click();
  
    await findByCss(driver, selIdioma).click();
   
    await findByXpath(driver, selEspanol).click();

    await delay(2000);

    await findByXpath(driver, siguienteBtn).click();

    await delay(3500);

    await findByCss(driver, nombreDelTema).sendKeys("tema automatico");

    await findByCss(driver, palabrasClaves).sendKeys("Industrial");

    await delay(3500);

    await findByXpath(driver, crearComunidadFinalBtn).click();

    console.info("Creacion de la comunidad terminado");

    const isNotified = await waitForElementByXpath(driver, comprobarCreacion).catch(e => false);

    if (isNotified === false) {

        console.log('\x1b[31m', 'Creacion de la comunidad fallida', '\x1b[0m');

    } else {

        console.log('\x1b[32m', 'Creacion de la comunidad exitosa', '\x1b[0m');
    }

    console.info("login as toplearning finished");


}