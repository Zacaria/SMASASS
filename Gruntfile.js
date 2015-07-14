'use strict';

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        // Watch Config
        watch: {
            options: {
                livereload: true
            },
            files: ['public/views/**/*'],
            scripts: {
                files: [
                    'scripts/**/*.js'
                ]
            },
            css: {
                files: [
                    'public/styles/css/**/*.css'
                ]
            },
            sass: {
                files: ['public/styles/scss/**/*.scss'],
                tasks: ['sass:dev']
            },
            images: {
                files: [
                    'images/**/*.{png,jpg,jpeg,webp}'
                ]
            },
            express: {
                files:  [ 'server.js', '!**/node_modules/**', '!Gruntfile.js' ],
                tasks:  [ 'express:dev' ],
                options: {
                    nospawn: true // Without this option specified express won't be reloaded
                }
            }
        },
        // Open Config
        open: {
            site: {
                path: 'http://localhost:3000'
            }
        },
        // Express Config
        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        },
        // Sass Config
        sass: {
            options: {
                cacheLocation: '.tmp/.sass-cache'
            },
            dev: {
                files: [{
                    expand: true,
                    cwd: 'public/styles/scss',
                    dest: 'public/styles/css',
                    src: ['main.scss'],
                    ext: '.css'
                }]
            }
        },
        // CSSmin config
        cssmin: {
             dist: {
                 files: {
                     'dist/styles/css/main.css': [
                         '.tmp/styles/{,*/}*.css',
                         'public/styles/{,*/}*.css'
                     ]
                 }
             }
        },
        // Clean Config
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        'dist/*',
                        '!dist/.git*'
                    ]
                }]
            },
            server: ['.tmp'],
        },
        // Copy Config
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'public',
                    dest: 'dist/',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/**/*.{webp,gif}',
                        'styles/fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: 'public/views',
                    dest: 'dist/views/',
                    src: '**/*.html'
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: 'public/styles/css',
                dest: '.tmp/styles/css/',
                src: '{,*/}*.css'
            }
        }
    });

    // Register Tasks
    // Serve
    grunt.registerTask('serve', 'Start working on this project.', [
        'sass:dev',
        'express:dev',
        'open:site',
        'watch'
    ]);

    // Build
    grunt.registerTask('build', 'Build production ready assets and views.', [
        'clean:dist',
        'cssmin',
        'copy:styles',
        'copy:dist',
        'clean:server'
    ]);

};