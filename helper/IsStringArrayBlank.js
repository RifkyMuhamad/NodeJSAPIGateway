function isStringArrayBlank(array) {
    return array.every(element => element === '') && array.length > 0;
}

export { isStringArrayBlank }