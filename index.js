
    const receivesAFunction= function(callback){
 callback();
    }
    

callback();

function returnsANamedFunction() {
    const namedFunction = function() {
        console.log('This is a named function.');
};

return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function(){
        console.log("Hey, flo.")
    }
}



