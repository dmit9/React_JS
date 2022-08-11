import openGoogle  from "./google.js";
import openYandex from "./librares/yandex";
let openAllMaps = () => {
    openGoogle();
    openYandex();
}

export default openAllMaps;
