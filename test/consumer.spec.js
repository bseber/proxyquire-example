
var proxyquire = require ('proxyquire');

var chai = require ('chai');
    chai.should();


describe ('consumer', function () {

    it ('greets John', function () {
        require ('../src/consumer').create ().greetJohn ().should.equal ('Hello John')
    });

    it ('proxyquire', function () {

        var factoryMock = {
            build: function () {
                return {
                    greet: function (name) {
                        return 'Konnichiwa ' + name;
                    }
                };
            }
        };

        var Consumer = proxyquire ('../src/consumer', {
            './factory': factoryMock
        });

        Consumer.create ().greetJohn ().should.equal ('Konnichiwa John');
    });

    it ('greets John again', function () {
        require ('../src/consumer').create ().greetJohn ().should.equal ('Hello John')
    });

});