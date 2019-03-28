'use strict';

/*
########################################################################################################################################################################################################
### TASK REGISTRATION ###
########################################################################################################################################################################################################
*/
// add additional tasks here
require('./Tasks/Styles.js');
require('./Tasks/Scripts.js');

// IMPORTANT: default task needs to be the last one before the last one to be required
require('./Tasks/Watch.js');
// IMPORTANT: default task needs to be the last one to be required
require('./Tasks/Default.js');
