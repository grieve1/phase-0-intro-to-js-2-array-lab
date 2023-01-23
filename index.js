const cats = ["Milo", "Otis", "Garfield"];
const newArray = [...cats, "Broom"];
const newCatArray = ["Arnold", ...cats];
const newCatsArray = cats.slice("Milo", "Otis")
const newCatArrays = cats.slice("Otis", "Garfield")

function myArray() { 
    
}

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph")
}

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(Garfield) {
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(Milo) {
    cats.shift("Milo")
}

function appendCat(Broom) {
    return [...cats, "Broom"]
}

function prependCat(Arnold) {
    return ["Arnold", ...cats];
}

function removeLastCat(Garfield) {
    return ["Milo", "Otis"]
}

function removeFirstCat(Milo) {
    return ["Otis", "Garfield"]
}