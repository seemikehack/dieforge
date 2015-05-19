module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      test: {
        options: {
          bare: true
        },
        files: {
          'build/src.js': 'src/**/*.coffee',
          'build/spec.js': 'spec/**/*.coffee'
        }
      },
      spec: {
        options: {
          bare: true
        },
        files: {
          'build/spec.js': 'spec/**/*.coffee'
        }
      },
      build: {
        options: {
          sourceMap: true
        },
        src: 'src/**/*.coffee',
        dest: 'build/src.js'
      },
      dist: {
        options: {
          join: true
        },
        src: 'src/**/*.coffee',
        dest: 'build/src.js'
      }
    },
    jasmine: {
      dev: {
        src: 'build/src.js',
        options: {
          specs: 'build/spec.js'
        }
      },
      dist: {
        src: 'dist/dieforge.min.js',
        options: {
          specs: 'build/spec.js'
        }
      }
    },
    umd: {
      all: {
        options: {
          src: 'build/src.js',
          amdModuleId: 'DieForge'
        }
      }
    },
    uglify: {
      all: {
        files: {
          'dist/dieforge.min.js': 'build/src.js'
        }
      }
    },
    clean: {
      build: ['build/*'],
      dist: ['dist/*']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-umd');

  grunt.registerTask('test:dev', ['clean:build', 'coffee:test', 'jasmine:dev', 'clean:build']);
  grunt.registerTask('test:dist', ['coffee:spec', 'jasmine:dist']);
  grunt.registerTask('build', ['test:dev', 'coffee:build', 'umd:all']);
  grunt.registerTask('dist', ['clean:all', 'coffee:dist', 'umd:all', 'uglify:all', 'test:dist', 'clean:build']);
  grunt.registerTask('clean:all', ['clean:build', 'clean:dist']);
};
