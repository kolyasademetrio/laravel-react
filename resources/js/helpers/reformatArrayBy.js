export function reformatArrayBy(array, reformatBy){
    return array.reduce((acc, el) => (acc[el[reformatBy]] = el, acc), {});
}