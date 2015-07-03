
var factory = require ('./factory');


var instance = factory.build ();


exports.create = function () {
    return {
        greetJohn: function () {
            return instance.greet ('John');
        }
    };
}