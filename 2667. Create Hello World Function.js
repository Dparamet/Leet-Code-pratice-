/**
 * @return {Function}
 */
var createHelloWorld = function() {
   var message = "Hello World";
    return function(...args) {
        return message;
    }
};
const Callme = createHelloWorld();
Callme();
