function allowDigits(obj) {
    (!((/^[0-9��]*$/i).test(obj.value))) ? obj.value = obj.value.replace(/[^0-9��]/ig, ''): null;
}