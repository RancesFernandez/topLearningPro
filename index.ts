import { loginSuperAdminTC } from "./src/login/loginSuperAdmin";
import { loginToplearningTC } from "./src/login/loginTopLearning";
import { crearComunidadTC } from "./src/toplearningFunctions/crearComunidad";
import { sugerirComunidadTC } from "./src/toplearningFunctions/sugerirComunidad";
import { delay, openApp, restartApp } from "./src/util/util";

async function init() {

    let driver = await openApp();

    await loginToplearningTC (driver);

    /*await delay();

    await sugerirComunidadTC(driver);*/

    await delay();

    await crearComunidadTC(driver);







    //driver = await restartApp(driver);

    //await loginSuperAdminTC(driver);





}

init();