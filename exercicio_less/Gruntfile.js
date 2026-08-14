module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    less: {
      development: {
        options: {
          compress: true,
        },
        files: {
          "build/styles/main.css": "src/styles/main.less",
        },
      },
    },

    uglify: {
      target: {
        files: {
          "build/scripts/main.min.js": "src/scripts/main.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Registrando a tarefa default (que executa o LESS e o UGLIFY)
  grunt.registerTask("default", ["less", "uglify"]);
  grunt.registerTask("build", ["less", "uglify"]);
};
