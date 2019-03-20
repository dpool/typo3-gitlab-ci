#!/bin/bash

## make sure that standard folder is available
[ -d gitlab-ci-scripts ] || mkdir gitlab-ci-scripts

## copy additional configuration for TYPO3
cp vendor/dpool/typo3-gitlab-ci/Scaffolding/AdditionalConfiguration.php public/typo3conf/

## create .env file
cp vendor/dpool/typo3-gitlab-ci/Scaffolding/.env-example .env

## symlink the CI/CD yml configuration
ln -s vendor/dpool/typo3-gitlab-ci/Configuration/.gitlab-ci.yml .gitlab-ci.yml

## copy empty files for customising of CI/CD processes in an individual project
cp vendor/dpool/typo3-gitlab-ci/Scaffolding/after-composer.sh gitlab-ci-scripts/after-composer.sh
cp vendor/dpool/typo3-gitlab-ci/Scaffolding/build-extensions.sh gitlab-ci-scripts/build-extensions.sh
cp vendor/dpool/typo3-gitlab-ci/Scaffolding/pre-deploy.sh gitlab-ci-scripts/pre-deploy.sh
cp vendor/dpool/typo3-gitlab-ci/Scaffolding/rsync-build-excludes.txt gitlab-ci-scripts/rsync-build-excludes.txt
cp vendor/dpool/typo3-gitlab-ci/Scaffolding/rsync-deploy-excludes.txt gitlab-ci-scripts/rsync-deploy-excludes.txt

## copy npm infrastructure
cp vendor/dpool/typo3-gitlab-ci/Scaffolding/package.json package.json
cp vendor/dpool/typo3-gitlab-ci/Scaffolding/Gulpfile.js Gulpfile.js