/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
          '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
          ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            app: {
                src: ['app/**/*.js', 'app/*.js'],
                dest: 'dist/app.js'
            },
            thirdParties: {
                src: [
                    'bower_components/angular/angular.js',
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/mapbox.js/mapbox.js'
                ],
                dest: 'dist/thirdparties.js'
            },
            css: {
                src: [
                    'bower_components/bootstrap/dist/css/bootstrap.css',
                    'bower_components/mapbox.js/mapbox.css',
                    'css/main.css'
                ],
                dest: 'dist/styles.css'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>',
                sourceMap: 'dist/app.map'
            },
            dist: {
                src: 'dist/app.js',
                dest: 'dist/app.min.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            }
            //lib_test: {
            //  src: ['lib/**/*.js', 'test/**/*.js']
            //}
        },
        ts: {
            target: {
                reference: "./app/_localReferences.ts",
                src: ['app/*.ts', 'app/**/*.ts'],
                outDir: ''
            }
        },
        watch: {
            gruntfile: {
                files: ['app/**/*.js', 'app/*.js'],
                tasks: ['jshint:gruntfile']
            },
            //lib_test: {
            //  files: '<%= jshint.lib_test.src %>',
            //  tasks: ['jshint:lib_test', 'qunit']
            //}
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-ts");

    // Default task.
    grunt.registerTask('default', ['ts', 'concat', 'uglify', 'watch']);

};
