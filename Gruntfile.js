module.exports = function(grunt) {

  // Configuración de Grunt
  grunt.initConfig({
    // Tarea de construcción de JS
    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      }
    },
    // Tarea de minificación y ofuscación de JS
    uglify: {
      options: {
        sourceMap: true,
        compress: {
          drop_console: true
        }
      },
      fontSdk: {
        files: {
          'dist/fontSdk.min.js': 'src/fontSdk.js'
        }
      }
    }
  });

  // Carga del complemento que proporciona la tarea de construcción de JS
  grunt.loadNpmTasks('grunt-babel');

  // Carga del complemento que proporciona la tarea de minificación y ofuscación de JS
  grunt.loadNpmTasks('grunt-contrib-uglify-es');

  // Tareas que ejecutan las tareas de construcción de JS, minificación y ofuscación de JS
  grunt.registerTask('buildFont', ['uglify:fontSdk']);

};