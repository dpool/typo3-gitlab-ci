<?php
/*
 * This call will read the .env file located in the Root-Directory of
 * our composer installation and use it to populate crucial TYPO3-variables
 * in the LocalConfiguration of the instance
 */
(new \Dpool\Typo3GitlabCi\ConfigLoader())->populate();
