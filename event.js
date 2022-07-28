var events = require("events");
var eventEmiter = new events.EventEmitter();

var my = function(){
    console.log("hello anvesh");
}

eventEmiter.on("n",my);
eventEmiter.emit("n")