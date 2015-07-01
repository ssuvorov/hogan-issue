module.exports = function(grunt) {
    grunt.config.merge({
        hogan: {
            templates: {
                options: {
                    binderName: 'hulk',
                    namespace: 'Templates',
                    nameFunc: function(fileName) {
                        //Grab the path package here locally for clarity
                        var _path = require('path');
                    
                        //'yada/yada/multi.1.js' -> 'multi.1'
                        var name = _path
                            .basename(
                            fileName,
                            _path.extname(fileName));

                        //'multi.1' -> 'name_1'
                        return name + '.mustache';

                        //return fileName.split('/').pop();
                    }
                },
                src: ['templates/index.mustache'],
                dest: 'templates/build/templatesPrecompiled.js'
            }
        }
    })
}