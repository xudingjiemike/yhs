'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Show grunt task time
    require('time-grunt')(grunt);
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    //var Path = require('path');

    // Grunt configuration
    grunt.initConfig({

        // Project settings
        config: {
            // Deploy directory for dev env
            publish: 'apple/main/webapp'
        },

        cdnify: {
            static: {
                options: {
                    base: '/html/',
                    html: {
                        'base[href]': 'href',
                        'img[src]': false,
                        'link[rel=stylesheet]': true,
                        'script[src]': false
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: '*.html',
                    dest: 'dist'
                }]
            }
        },
        // Clean dist folder
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        'dist/{,*/}*'
                    ]
                }]
            }
            //server: '.tmp'
        },
        // Copies remaining files to places other tasks can use
        copy: {
            publish: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'dist',
                        dest: '<%= config.publish %>',
                        src: [
                            '**'
                        ]
                    }
                ]
            },
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'app',
                        dest: 'dist/images',
                        src: [
                            'images/*.*'
                        ]
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'app',
                        dest: 'dist',
                        src: [
                            'views/{,*/}*.html',
                            'views/template/{,*/}*.html',
                            'views/yhlxrBusiness/{,*/}*.html',
                            'index.html'
                        ]
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'app',
                        dest: 'dist',
                        src: [
                            'template/{,*/}*.html'
                        ]
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'app/views/index',
                        dest: 'dist',
                        src: [
                            'index.html'
                        ]
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'data',
                        src: ['data/{,*/}*.json'],
                        dest: 'dist/data'
                    }

                ]
            }
        },

        // Renames files for browser caching purposes
        //filerev: {
        //    dist: {
        //        src: [
        //            'dist/scripts/{,*/}*.js',
        //            'dist/styles/{,*/}*.css'
        //        ]
        //    }
        //},
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: [
                        'dist/views/yhlxr/*.html',
                        'dist/views/template/{,*/}*.html',
                        'dist/views/yhlxrBusiness/{,*/}*.html',
                        'dist/index.html'
                    ],
                    dest: 'dist'
                }]
            }
        },

        useminPrepare: {
            html: [
                'app/index.html'
            ],
            options: {
                dest: 'dist',
                flow: {
                    steps: {
                        js: ['concat', 'uglify'],
                        css: ['concat', 'cssmin']
                    },
                    post: {}
                }
            }
        },

        usemin: {
            html: [
                'dist/*.html'
            ]
        },

        uglify: {
            options: {
                mangle: false
            }
        },
        // �ļ��ϲ�
        concat: {
            options: {
                separator: ';'
            },
            generated: {
                files: [
                    {
                        src: [
                            'app/styles/*.css'
                        ],
                        dest: '.tmp/styles/app.css'
                    },

                    {
                        src: [
                            'app/scripts/api/*.js',
                            'app/scripts/controllers/*.js',
                            'app/scripts/directives/*.js',
                            'app/scripts/service/*.js',
                            'app/scripts/*.js'

                        ],
                        //dest: '.tmp/concat/modules/yhzx/scripts/app.js'
                        dest: 'dist/scripts/yhlxr.js'
                    }
                ]
            }
        },
        // css�ļ�ѹ��
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            generated: {
                files: {
                    'dist/styles/yhlxr.css': ['.tmp/styles/app.css']
                }
            }
        },

        jst: {
            compile: {
                options: {
                    namespace:"yhs",
                    processName:function(filename) {
                        var attrs = (filename || '').slice('/');
                        return attrs[attrs.length - 1];
                    }
                },
                files: {
                    "dist/views/template.js":  ['dist/views/yhlxr/*.html', 'dist/views/template/{,*/}*.html', 'dist/views/yhlxrBusiness/{,*/}*.html','dist/views/trustors.html','dist/index.html']
                }
            }
        }

    });

    // Build version for production
    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'copy:dist',
        'usemin',
        'jst'
    ]);

    // Build & deploy assets into backend server
    grunt.registerTask('build.static', [
        'build',
        'cdnify:static'
    ]);

    grunt.registerTask('templates', [
        'ngtemplates:announce'
    ]);

    // Publish assets into backend server
    grunt.registerTask('publish', [
        'copy:publish'
    ]);

    // Build & deploy assets into backend server
    grunt.registerTask('deploy', [
        'build.static',
        'publish'
    ]);

};
