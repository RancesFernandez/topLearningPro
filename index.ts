import { loginEstudiante } from "./src/login/loginEstudiante";
import { loginSuperAdminTC } from "./src/login/loginSuperAdmin";
import { loginToplearningTC } from "./src/login/loginTopLearning";
import { adjuntarComunidadAPlanDeEstudios } from "./src/toplearningFunctions/adjuntarComunidadAPlanDeEstudios";
import { agregarRecursosAComunidad } from "./src/toplearningFunctions/agregarRecursosAComunidad";
import { agregarUsuarioAPlanDeEstudios } from "./src/toplearningFunctions/agregarUsuarioAPlanDeEstudios";
import { aprenderEnComunidad } from "./src/toplearningFunctions/aprenderEnComunidad";
import { crearComunidadTC } from "./src/toplearningFunctions/crearComunidad";
import { crearPlanDeEstudios } from "./src/toplearningFunctions/crearPlanDeEstudios";
import { demostrarEnComunidad } from "./src/toplearningFunctions/demostrarEnComunidad";
import { invitarAComunidad } from "./src/toplearningFunctions/invitarAComunidad";
import { publicarEnLaComunidad } from "./src/toplearningFunctions/publicarEnLaComundad";
import { sugerirComunidadTC } from "./src/toplearningFunctions/sugerirComunidad";
import { delay, openApp, restartApp } from "./src/util/util";

async function init() {

    let driver = await openApp();

    await loginToplearningTC (driver);

    await delay();

    await sugerirComunidadTC(driver);

    await delay();

    await crearComunidadTC(driver);

    await delay();

    await agregarRecursosAComunidad(driver);

    await delay();

    await invitarAComunidad(driver);

    await delay();

    await crearPlanDeEstudios(driver);

    await delay();

    await adjuntarComunidadAPlanDeEstudios(driver);

    await delay();

    await publicarEnLaComunidad(driver);

    await delay();

    await demostrarEnComunidad(driver);

    await delay();

    await agregarUsuarioAPlanDeEstudios(driver);

    await delay();

    driver = await restartApp(driver);

    await delay();

    await loginEstudiante(driver);

    await delay();

    await aprenderEnComunidad(driver);

    //driver = await restartApp(driver);

    //await loginSuperAdminTC(driver);





}

init();