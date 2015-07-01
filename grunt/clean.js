module.exports = function(grunt) {
    grunt.config.merge({
        clean: {
             src: ['templates/build/templatesPrecompiled.js']
        }
    })
}