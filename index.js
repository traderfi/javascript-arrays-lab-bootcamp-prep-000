const app = "I don't do much."
var dogs = ['Dalmatian', 'Poodle', 'Jack Russell'];
function destructivelyPrependKitten(name) {
      kittens.unshift(name)
      return kittens
}


function destructivelyRemoveLastKitten() {
      kittens.pop()
      return kittens
}

function destructivelyAppendKitten(name) {
    kittens.push(name)
    return kittens
}

function destructivelyRemoveFirstKitten() {
      kittens.shift()
      return kittens
}

function appendKitten(name) {
    var xd =  [...kittens, name]
      return xd
}

function prependKitten(name) {
  var xd =  [name, ...kittens]
    return xd
}



function removeFirstKitten() {
      var xa = kittens;
        xa.slice(1);
        return xa;
}

function removeLastKitten() {
    var de = kittens
    de.slice(0, de.length - 1)
    return de}
    //  var xe = kittens;
      //xe.pop();
    //  return xe;
