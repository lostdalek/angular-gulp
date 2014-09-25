
## Getting Started

First Install development dependencies, ensure you have nodejs installed and install the following tools:

[Gulp](http://gulpjs.com/) command line utility:
```bash
$ npm install -g gulp
```
[Bower](http://gruntjs.com/) command line utility:
```bash
$ npm install -g bower
```

once installed see [update dependencies](#updating-dependencies)

## Updating Dependencies

###Ensure node tools and gulp plugins are up to date:

```bash
$ npm install
```
will install dependencies defined in **package.json** file

## Usage

Your main javascript file is placed in src/js/app.js. Development and production app.js file is generated from gulp tasks.

For more informations run:
```bash
$ gulp -h
```
Launch a dev server at **http://localhost:8080/** and watch for modifications:
```bash
$ gulp serve --dev
```

### build options
Application can be built in different environnements:
```bash
$ gulp build --dev
```
OR
```bash
$ gulp build --prod
```
Default environment is **prod**, linting for production is more restrictive, it won't allow alert() OR console.log() globals


Application can be packaged for differents targets:
targets configuration can be found in **gulp/target/[target_name].js**

```bash
$ gulp build --dev -t symfony
```

### Overriding Application configuration
@TODO in target context allow overriding
