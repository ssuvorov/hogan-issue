module.exports = function(grunt) {

    'use strict';

    grunt.initConfig();

    require('./grunt/clean')(grunt);
    require('./grunt/hogan')(grunt);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-hogan');

    // Separate task for templates
    grunt.registerTask('templates', [
        'clean',
        'hogan'
        //'concat'
    ]);



    // Run on maven install
    grunt.registerTask('default', [
        'templates'
    ]);
};