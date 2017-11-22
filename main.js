#!/usr/bin/env node
var mappings = require("./mappings/")

var myapp = module.exports = {
	// init: function(){
 //            var utf2buck = {};
 //            for (var i in this.buck2utf){
 //                  utf2buck[this.buck2utf[i]] = i;
 //            }
 //            this.utf2buck = utf2buck;

	// 	var utf2bucksafe = {};
	// 	for (var i in this.buck2utfsafe){
	// 		utf2bucksafe[this.buck2utfsafe[i]] = i;
	// 	}
	// 	this.utf2bucksafe = utf2bucksafe;
	// },
 //      bw2utf_extended : function(str) {
 //            if(!str){
 //                  console.error("bw2utf: No text were given");
 //                  return "";
 //            }
 //            return str.replace(/./g,function(m){
 //                  var x= myapp.buck2utf[m];
 //                  return !x ? m : x;
 //            });
 //      },
	// bw2utf : function(str) {
 //            if(!str){
 //                  console.error("bw2utf: No text were given");
 //                  return "";
 //            }
 //            var extended = ["^","#",":","@","\"","[",";",",",".","!","-","+","%","]","_"]
 //            return str.replace(/./g,function(m){
 //                  if(extended.indexOf(m) >= 0)
 //                        return m
 //                  var x= myapp.buck2utf[m];
 //                  return !x ? m : x;
 //            });
 //      },
 //      bw2utfsafe : function(str) {
	// 	if(!str){
 //                  console.error("bw2utf: No text were given");
 //                  return "";
 //            }
	// 	return str.replace(/./g,function(m){
	// 		var x= myapp.buck2utfsafe[m];
	// 		return !x ? m : x;
	// 	});
	// },
 //      utf2bw : function(str) {
 //            if(!str){
 //                  // console.error("utf2bw: No text were given");
 //                  return "";
 //            }
 //            return str.replace(/./g,function(m){
 //                  var x;
 //                  if (!(x = myapp.utf2buck[m]))
 //                        return m;
 //                  else
 //                        return x;
 //            });
 //      },
	// utf2bwsafe : function(str) {
	// 	if(!str){
	// 		// console.error("utf2bw: No text were given");
 //                  return "";
 //            }
	// 	return str.replace(/./g,function(m){
	// 		var x;
	// 		if (!(x = myapp.utf2bucksafe[m]))
	// 			return m;
	// 		else
	// 			return x;
	// 	});
	// },
	general : function(str,type) {
		if(!str){
                  // console.error("bw2utf: No text were given");
                  return "";
            }
		return str.replace(/./g,function(m){
			var x= myapp.mappings[type][m];
			// console.log(x,m,myapp.mappings);
			return !x ? m : x;
		});
	},
	mappings : mappings,
};
if (require.main === module) { // called directly
    var argv = require('yargs')
    .usage('Usage: $0 -f filename -t type')
    .demand('f').default("f","/dev/stdin").describe("f","input file")
    .demand('t').describe('t','Type of transliteration. Supported mappings: '+Object.keys(mappings).join(" "))
    .help('h')
    .alias('h', 'help')
    .argv

    if(Object.keys(mappings).length == 0){
    	console.error("ERROR: No mappings rules found.")
    	process.exit(1);
    }

    if(Object.keys(mappings).indexOf(argv.t) < 0 ){
    	console.error("ERROR: Not supported mappings:", argv.t)
    	process.exit(1);
    }

    var fs = require('fs')
    var es = require('event-stream');
    // myapp.init();
    fs.createReadStream(argv.f)
      .pipe(es.split("\n"))
      .pipe(es.through(function(data){
            this.emit("data",myapp.general(data,argv.t)+"\n")
            return 
      }))
      .pipe(process.stdout)
}
else{
      module.exports = function(type){
      	if(!type)
      		throw new Error("No type of transliteration is given.")
		return (str)=>{return myapp.general(str,type)}
	}
}