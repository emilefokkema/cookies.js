module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs:{
			compile:{
				options:{
					    baseUrl: "src/",
					    name: "trackState",
					    out: "dist/track-state.min.js",
					    onModuleBundleComplete: function (data) {
						  var fs = module.require('fs'),
						    amdclean = module.require('amdclean'),
						    outputFile = data.path,
						    cleanedCode = amdclean.clean({
						      'filePath': outputFile
						    });

						  fs.writeFileSync(outputFile, cleanedCode);
						}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('default',['requirejs']);

};