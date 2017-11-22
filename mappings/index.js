require("fs").readdirSync(__dirname).forEach(function(file) {
  var x = require("./" + file);
  for(var i in x){
  	// console.log(i);
  	module.exports[i] = x[i]
  }
});
