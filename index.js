const cats = ["Milo","Otis","Garfield"]
function destructivelyAppendCat(name) {
    return cats.push(name)
}
function destructivelyPrependCat(name) {
    return cats.unshift (name)
}
function destructivelyRemoveLastCat(name) {
    return cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
}
function appendCat(name) {
    let newArray = [...cats];
    newArray.push(name) 
    return newArray
}
function prependCat(name) {
    let cats2 = [...cats]
    cats2.unshift(name)
    return cats2
}
function removeLastCat(name) {
    let cats3 = [...cats]
    cats3.pop(name)
    return cats3
}
function removeFirstCat(name) {
    let cats4 = [...cats]
    cats4.shift(name)
    return cats4
}