// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);

    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);

    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    
    return cats
}

function appendCat(name) {
    const catAppended = [...cats, name];

    return catAppended;
}

function prependCat(name) {
    const catPrepended = [name, ...cats];

    return catPrepended;
}

function removeLastCat() {
    const lastCatRemoved = cats.slice(0, cats.length-1);

    return lastCatRemoved;
}

function removeFirstCat() {
    const firstCatRemoved = cats.slice(1, cats.length);

    return firstCatRemoved;
}