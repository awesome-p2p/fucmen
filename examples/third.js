var Fucmen = require('..').Fucmen;
var util = require('util');
var colors = require('colors');

var fm = new Fucmen({ name: 'test3' });

fm.on('error', console.error);

fm.join('test_msg', console.log);

fm.on('ready', function () {
    var i = 0;
    setInterval(function () {
        fm.publish('test_msg', ['this is a test', 'message', i++]);
    }, 1000);

    setInterval(function () {
//        console.log('connections:'.red.bold, util.inspect(fm.connections).red);
        console.log('nodes '.cyan.bold, util.inspect(fm.nodes).cyan);
    }, 3000);
});
