import { WebDriver } from "selenium-webdriver";
import { delay, findByCss, findByXpath } from "../util/util";

const explorarBtn = '//div[@class="main-center display-block contain-navigators ng-star-inserted"]/button[1]';
const menuComunidad = '//p[contains(text(), "Comunidad automatica")]/../../div[1]/div[2]/button';
const editarBtn = '//div/div/div/button[3]';
const menuUnidades = '//mat-expansion-panel[2]/mat-expansion-panel-header/span/mat-panel-description/button';
const eliminarUnidades = '//div[@class="cdk-overlay-pane"]/div/div/button[3]';
const aceptarEliminarUnidades = '//div[@class="cdk-overlay-pane"]/mat-dialog-container/app-confirm/mat-dialog-actions/button[2]';
const desplegarUnidad = '//mat-expansion-panel[1]/mat-expansion-panel-header[1]';
const menuDelTema1 = '//mat-expansion-panel/div[@role= "region"][1]/div/mat-accordion/mat-expansion-panel[1]/mat-expansion-panel-header/span/mat-panel-description/button';
const menuDelTema2 = '//mat-expansion-panel/div[@role= "region"][1]/div/mat-accordion/mat-expansion-panel[2]/mat-expansion-panel-header/span/mat-panel-description/button';
const eliminarTema = '//div[@class= "cdk-overlay-pane"]/div/div/button[6]';
const aceptarEliminarTema = '//div[@class="cdk-overlay-pane"]/mat-dialog-container/app-confirm/mat-dialog-actions/button[2]';
const nuevoRecurso = '//div[@class= "cdk-overlay-pane"]/div/div/button[1]';
const tipoArchivoImagen = '//div[contains(text(), "Imagen")]';
const agregarUnsplash = '//span[contains(text(), " USAR UNSPLASH ")]';
const inputNombreUnsplash = 'input[placeholder= "Ingrese el término a buscar..."]';
const selectImg = 'img.img-gallery';
const inputNombreDelRecurso = 'input[placeholder= "Nombre del recurso"]'
const inputDuracionEnSegundos = 'input[placeholder= "Duración en segundos"]';
const inputResumenComunidad = '//*/angular-editor/div/div/div';
const inputPreguntaDinamizadora = 'input[placeholder= "Pregunta dinamizadora sobre el recurso"]';
const contenidoExternoBtn = '//mat-radio-group/mat-radio-button[1]/label/div[1]';
const guardarBtn = '//span[contains(text(), "Guardar")]';





export async function agregarRecursosAComunidad (driver: WebDriver) {

    console.info("Agregar recurso a la comunidad iniciando");

    await findByXpath(driver, explorarBtn).click();

    await delay();

    await findByXpath(driver, menuComunidad).click();

    await delay(2500);

    await findByXpath(driver, editarBtn).click();

    await delay();

    await findByXpath(driver, menuUnidades).click();

    await delay();

    await findByXpath(driver, eliminarUnidades).click();

    await delay();

    await findByXpath(driver, aceptarEliminarUnidades).click();

    await delay(7000);
    
    await findByXpath(driver, menuUnidades).click();

    await delay();

    await findByXpath(driver, eliminarUnidades).click();

    await delay();

    await findByXpath(driver, aceptarEliminarUnidades).click();

    await delay();

    await findByXpath(driver, desplegarUnidad).click();

    await delay(3000);

    await findByXpath(driver, menuDelTema2).click();

    await delay(3000);

    await findByXpath(driver, eliminarTema).click();

    await delay(3000);

    await findByXpath(driver, aceptarEliminarTema).click();

    await delay();

    await findByXpath(driver, desplegarUnidad).click();

    await delay(3000);

    await findByXpath(driver, menuDelTema2).click();

    await delay(3000);

    await findByXpath(driver, eliminarTema).click();
    
    await delay(3000);

    await findByXpath(driver, aceptarEliminarTema).click();

    await delay();

    await findByXpath(driver, desplegarUnidad).click();

    await delay(3000);

    await findByXpath(driver, menuDelTema1).click();

    await delay();

    await findByXpath(driver, nuevoRecurso).click();

    await delay();

    await findByXpath(driver, tipoArchivoImagen).click();

    await findByXpath(driver, agregarUnsplash).click();

    await delay();

    await findByCss(driver, inputNombreUnsplash).sendKeys("mac");

    await delay();

    await findByCss(driver, selectImg).click();

    await delay(2000);

    await findByCss(driver, inputNombreDelRecurso).sendKeys("recurso automatico");

    await findByCss(driver, inputDuracionEnSegundos).sendKeys("15");

    await findByXpath(driver, inputResumenComunidad).sendKeys("Resumen automatico");

    await findByCss(driver, inputPreguntaDinamizadora).sendKeys("pregunta automatica");

    await findByXpath(driver, contenidoExternoBtn).click();

    await delay(1500);

    await findByXpath(driver, guardarBtn).click();

    console.info("Agregar recursos a la comunidad terminado");
    
}