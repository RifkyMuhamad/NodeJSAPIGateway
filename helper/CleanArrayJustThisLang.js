import { setJustThisLang } from "../config/AppConfig.js";

export function cleanArrayJustThisLang(arrayOne, arrayTwo) {
    setJustThisLang(arrayOne.filter(nilai => !arrayTwo.includes(nilai)));
}