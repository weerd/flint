module.exports = function(grunt) {

	// Project Configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			dev: {
				options: {
					// Locate the config file with Compass settings.
					config: 'config.rb',
					force: true
				}
			}
		},

		concat: {
			options: {
				// Define a string to put between each file in the concatenated output.
				separator: ';'
			},
			dist: {
				// The files to concatenate.
				src: ['assets/js/plugins/**/*.js', '!assets/js/modules/**/*.js', '!assets/js/global.js', 'assets/js/modules/**/*.js', 'assets/js/global.js'],
				// The location of the resulting JS file.
				dest: 'assets/js/concat.js'
			}
		},

		uglify: {
			options: {
				// The banner is inserted at the top of the output.
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("mm-dd-yyyy") %> */\n'
			},
			dist: {
				files: {
					'assets/js/global.min.js': ['<%= concat.dist.dest %>'],
					'assets/js/modernizr.min.js': ['assets/js/modernizr.js']
				}
			}
		},

		jshint: {
			// Define the files to lint.
			files: ['gruntfile.js', 'assets/js/**/*.js'],
			// Configure JSHint (documented at http://www.jshint.com/docs/)
			options: {
				// More options here if you want to override JSHint defaults.
				globals: {
					jQuery: true
				}	
			}
		},

		watch: {
			compass: {
				// We watch and compile the sass files with compass as normal, but don't live reload here.
				files: ['assets/sass/**/*.scss'],
				tasks: ['compass:dev']
			},
			livereload: {
				// Here we watch the files the compass task will compile to.
				// These files are sent to the live reload server after compass compiles to them.
				// If using the Chrome Extension, need to install it 
				// (https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei).
				options: {
					livereload: true
				},
				files: ['assets/css/*.css']
			}
		}
	});

	// Load the plugins.
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).

	// The default task can be run just by typing "grunt" on the command line.
	grunt.registerTask('default', ['compass', 'concat', 'uglify']);
	
}