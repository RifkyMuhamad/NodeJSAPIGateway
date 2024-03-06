// pr
let exceptVocab = [];

function setExceptVocab (value) {
    exceptVocab = value;
}

function getExceptVocab () {
    return exceptVocab;
}

let exceptLang = [];

function setExceptLang (value) {
    exceptLang = value;
}

function getExceptLang () {
    return exceptLang;
}

let justThisLang = [];

function setJustThisLang (value) {
    justThisLang = value;
}

function getJustThisLang () {
    return justThisLang;
}

export {
    setExceptVocab,
    getExceptVocab ,
    setExceptLang,
    getExceptLang,
    setJustThisLang,
    getJustThisLang
};