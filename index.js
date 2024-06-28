
let receivesAFunction = (callback) => callback();


function returnsANamedFunction (){

    return function namedFun(){

    }
}

function returnsAnAnonymousFunction() {
    return function (){

    }
}