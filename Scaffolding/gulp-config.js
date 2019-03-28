'use strict';

/*
########################################################################################################################################################################################################
##### DEFINE VARIABLES
########################################################################################################################################################################################################
 */

module.exports = {
    // ###########################################################################################
    // ##### CSS VARIABLES
    // ###########################################################################################
    cssInputFilesForWatcher: [
        './public/typo3conf/ext/dpool_base/Resources/Private/Scss/**/*.scss'
        // --> add the files of other extensions/modules here
    ],
    cssInputFiles: [
        './public/typo3conf/ext/dpool_base/Resources/Private/Scss/Include.scss'
        // --> add the files of other extensions/modules here
    ],
    cssOutputDist: 'public/typo3conf/ext/dpool_base/Resources/Public/Stylesheets',
    cssOutputFile: 'Main.css',
    cssOutputFileMin: 'Main.min.css',
    sassOptions: {
        errLogToConsole: true,
        outputStyle: 'expanded'
    },
    autoprefixerOptions: {
         browsers: [
             'last 2 versions',
             '> 5%'
         ],
        cascade: false
    },


    // ###########################################################################################
    // ##### JS VARIABLES
    // ###########################################################################################

    jsInputFiles: [
    './public/typo3conf/ext/dpool_base/Resources/Private/JavaScript/**/*.js'
    // --> add the files of other extensions/modules here
    ],

    jsOutputDist: 'public/typo3conf/ext/dpool_base/Resources/Public/JavaScript',
    jsOutputFile: 'Main.js',
    jsOutputFileMin: 'Main.min.js'

};