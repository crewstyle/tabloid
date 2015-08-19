/*! *//*!
 * ~~~~~~~~~~~~~~~~~~
 * Tabloïd - ™æß¬œ¨î∂
 * https://github.com/crewstyle/tabloid
 * ~~~~~~~~~~~~~~~~~~
 * Copyright 20xx Achraf Chouk (http://github.com/crewstyle)
 */

module.exports = function (grunt){
    //------ [REGISTER CONFIGURATION] ------//

    grunt.initConfig({
        //project settings
        yohoho: {
            name: 'tabloid',
            path: {
                bow: 'bower_components',
                src: '.',
                tar: 'dist'
            }
        },

        //packages are listed here
        pkg: grunt.file.readJSON('package.json'),

        //JShint validation
        jshint: {
            all: [
                '<%= yohoho.path.src %>/tabloid.js'
            ]
        },

        //1. remove any previously-created files
        clean: [
            '<%= yohoho.path.tar %>/*',
            '<%= yohoho.path.tar %>/standalone/*',
        ],

        //2. minify CSS files
        cssmin: {
            compress: {
                files: {
                    '<%= yohoho.path.tar %>/<%= yohoho.name %>.min.css': [
                        '<%= yohoho.path.src %>/<%= yohoho.name %>.css'
                    ]
                }
            }
        },

        //3. uglify JS files
        uglify: {
            options: {
                preserveComments: 'some'
            },
            my_target: {
                files: {
                    //JS version including jQuery package
                    '<%= yohoho.path.tar %>/<%= yohoho.name %>.min.js': [
                        //jQuery
                        '<%= yohoho.path.bow %>/jquery/dist/jquery.js',
                        //Main
                        '<%= yohoho.path.src %>/<%= yohoho.name %>.js'
                    ],
                    //JS version without jQuery package
                    '<%= yohoho.path.tar %>/standalone/<%= yohoho.name %>.min.js': [
                        '<%= yohoho.path.src %>/<%= yohoho.name %>.js'
                    ]
                }
            }
        }
    });

    //------ [REGISTER MODULES] ------//

    //remove any previously-created files
    grunt.loadNpmTasks('grunt-contrib-clean');

    //minify CSS files
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //JShint validation
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //uglify JS files
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //------ [REGISTER TASKS] ------//

    //JShint validation task: grunt hint
    grunt.registerTask('test',      ['jshint']);

    //default task: `grunt default` / `grunt`
    grunt.registerTask('default',   ['clean','cssmin','uglify']);
};
