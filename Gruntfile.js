module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dev: {
        files: {
          'dev/css/gg-framework.css': 'dev/scss/gg-framework.scss'
        }
      }
    },

    autoprefixer: {
      dev: {
        options: {
          browsers: ['last 2 versions']
        },
        files: {
          'dev/css/gg-framework.prefixed.css': 'dev/css/gg-framework.css'
        }
      }
    },

    cssmin: {
      dev: {
        files: {
          'dev/css/gg-framework.min.css': 'dev/css/gg-framework.prefixed.css'
        }
      },
      build: {
        files: {
          'dist/gg-framework.min.css': 'dev/css/gg-framework.prefixed.css'
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
        files: [
          'dev/scss/**/*.scss',
          'dev/test/**/*'
        ],
        tasks: ['sass:dev', 'autoprefixer:dev', 'cssmin:dev']
      }
    }

  });

  grunt.registerTask('serve', ['express', 'watch:styles']);

  grunt.registerTask('build', ['sass:dev', 'autoprefixer:dev', 'cssmin:build']);

};
