export function isEmail(text) {
    var emailReg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
    return emailReg.test(text);
}

export function isTime(timeStr) {
    var regEx = /^([0-1]{1}\d|2[0-3]):([0-5]\d)$/;
    return regEx.test(timeStr);
}

export function isUndefined(obj) {
    return obj == null || typeof (obj) == "undefined";
}

export function isBlank(obj) {
    return obj == null || typeof (obj) == "undefined" || obj === "";
}

export function isNotBlank(obj) {
    return obj != null && typeof (obj) != "undefined" && obj !== "";
}

export function isNotUndefined(obj) {
    return obj != null && typeof (obj) != "undefined";
}

export function handleUndefined(obj, defaultV) {
    if (defaultV) {
        return isNotUndefined(obj) ? obj : defaultV;
    }
    return isNotUndefined(obj) ? obj : undefined;
}