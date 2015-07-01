module.exports = function(grunt) {
    grunt.config.merge({
        hoganclient: {
            templates: {
                options: {
                    variable: 'window.tmpl'
                    //binderName: 'hulk',
                    //    namespace: 'Templates',
                    //nameFunc: function(fileName) {
                    //    //Grab the path package here locally for clarity
                    //    var _path = require('path');
                    //
                    //    //'yada/yada/multi.1.js' -> 'multi.1'
                    //    var name = _path
                    //        .basename(
                    //        fileName,
                    //        _path.extname(fileName));
                    //
                    //    //'multi.1' -> 'name_1'
                    //    return name + '.mustache';
                    //
                    //    //return fileName.split('/').pop();
                    //}
                },
                src: ['../src/main/content/jcr_root/etc/designs/orion/upc/js/orion/templates/SearchResultsOnline.hogan'],
                dest: 'src/main/content/jcr_root/etc/designs/orion/upc/js/orion/templates/build/templates.js'
                //}
                //templates: {
                //    files: templatesFiles,
                //    options: {
                //        namespace: 'Templates',
                //        defaultName: function(file) {
                //            return file.split('/').pop();
                //        }
                //    }
            }
        }
    })
}