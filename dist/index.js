"use strict";
function extractNumber(text) {
    const result = [];
    for (let i = 0; i < text.length; i++) {
        const candidate = text[i];
        if (isNumber(candidate)) {
            result.push(candidate);
        }
    }
    return Number(result.join(""));
}
function isNumber(text) {
    return !Number.isNaN(Number(text));
}
