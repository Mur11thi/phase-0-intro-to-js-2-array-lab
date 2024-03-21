// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(`Ralph`);
}
function destructivelyPrependCat(name){
    cats.unshift(`Bob`)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift(0)
}
function appendCat(name){
  return cats.concat(name)
}
function prependCat(name){
    
    return [name].concat(cats);
}
function removeLastCat(name){
 return cats.slice(0, cats.length - 1);
}
function removeFirstCat(name){
    return cats.slice(1);
}

