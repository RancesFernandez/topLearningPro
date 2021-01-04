import { loginToplearningTC } from "./src/login/loginTopLearning";
import { openApp } from "./src/util/util";

async function init() {

    let driver = await openApp();

    await loginToplearningTC (driver);

}

init();