// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here

    // BOWER
   bower_concat: {
    all: {
      dest: "js/concat/bower.js",
      destCss: "css/bower.css"
    }
   },

    // JS TASKS
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: {
          'js/concat/app.js' : ['js/app.js'],
          'js/concat/mainController.js' : ['js/controllers/mainController.js']
        }
      }
    },

    concat: {
      js: {
        src: ['js/concat/app.js', 'js/concat/mainController.js'],
        dest: 'js/concat/app.js'
      }
    },

    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      dist: {
        files: {
          '../dist/js/app.min.js' : ['js/concat/app.js'],
          '../dist/js/bower.min.js' : 'js/concat/bower.js'
        }
      }
    },


    // SCSS TO CSS
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/styles.css' : 'scss/styles.scss'
        }
      }
    },

    // MINIFY CSS
    cssmin: {
      options:{
        banner:  '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          '../dist/css/styles.min.css': ['css/concat/bower.css', 'css/styles.css']
        }
      }
    },

    // watch
    // edits to bower.json runs 'bower install'
    watch: {
      css: {
        files: ['scss/**/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      less: {
        files: ['bower.json'],
        tasks: ['exec:bower_install']
      },
      js:{
        files: ['js/**/*.js'],
        tasks: ['bower_concat', 'ngAnnotate', 'concat', 'uglify']
      }
    },

    // atuomatically run bower install when there are changes to bower json
    exec: {
      bower_install: {
        cmd: "bower install"
      }
    }

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-exec');
  grunt.registerTask('default', ['bower_concat', 'ngAnnotate', 'concat', 'uglify', 'sass', 'cssmin']);

};

