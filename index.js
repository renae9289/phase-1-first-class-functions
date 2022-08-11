function callbackFunction(parameter) {
    console.log(parameter)
}

function receivesAFunction(callbackFunction) {
    return callbackFunction ()
}