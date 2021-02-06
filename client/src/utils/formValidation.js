export function minLengthValidation(inputData, minlength) {
    const { value } = inputData;

    removeClassErrorSuccess(inputData);

    if (value.length >= minlength) {
        inputData.classList.add("success");
        return true;

    } else {
        inputData.classList.add("error");
        return false;
    }
}

function removeClassErrorSuccess(inputData) {
    inputData.classList.remove("success");
    inputData.classList.remove("error");
}

export function emailValidation(inputData) {
    const emailValid = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(uv|alumnos+\.+uv)\.cl$/;
    const { value } = inputData;

    removeClassErrorSuccess(inputData);

    const resultValidation = emailValid.test(value);
    if (resultValidation) {
        inputData.classList.add("success");
        return true;
    } else {
        inputData.classList.add("error");
        return false;
    }
}