module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourceMap: true
      },
      dev: {
        files: {
          'dev/css/gg-framework.css': 'dev/scss/gg-framework.scss'
        }
      }
    },

    autoprefixer: {
      dev: {
        options: {
          browsers: ['last 2 versions'],
          map: true
        },
        files: {
          'dev/css/gg-framework.prefixed.css': 'dev/css/gg-framework.css'
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'dist/css/gg-framework.min.css': 'dev/css/gg-framework.prefixed.css'
        }
      }
    },

    uglify: {
      dev: {
        options: {
          sourceMap: true
        },
        files: {
          'dev/js/gg-framework.min.js': [
            'dev/js/libs/**/*.js',
            'dev/js/gg-framework.js'
          ]
        }
      },
      build: {
        files: {
          'dist/js/gg-framework.min.js': 'dev/js/gg-framework.js'
        }
      }
    },

    express: {
      dev: {
        options: {
          port: 3000,
          hostname: 'localhost',
          bases: ['./dev'],
          livereload: true
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      styles: {
        files: ['dev/scss/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer:dev']
      },
      scripts: {
        files: [
          'dev/js/libs/**/*.js',
          'dev/js/gg-framework.js'
        ],
        tasks: ['uglify:dev']
      },
      test: {
        files: ['dev/test/**/*']
      }
    }

  });

  grunt.registerTask('serve', ['express', 'watch']);

  grunt.registerTask('build', ['sass:dev', 'autoprefixer:dev', 'cssmin:build', 'uglify:build']);

};
