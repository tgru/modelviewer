# Model Viewer

An 3D model viewer for Nextcloud.

## Features

This project is currently under development so there are not all features implemented yet.

Here is a rough todo list:

- [x] Rendering the 3D model in an modal window at opening it in the files app
- [x] `stl` support
- [ ] `obj` support
- [ ] Zooming the model
- [ ] Panning the model
- [ ] Rotating the model
- [ ] Solid view
- [ ] Wireframe view
- [ ] Fullscreen mode
- [ ] Generating thumbnails for models
- [ ] Work on mobile

## Building the app

The app can be built by using the provided Makefile by running:

    make

This requires the following things to be present:
* make
* which
* tar: for building the archive
* curl: used if phpunit and composer are not installed to fetch them from the web
* npm: for building and testing everything JS, only required if a package.json is placed inside the **js/** folder

The make command will install or update Composer dependencies if a composer.json is present and also **npm run build** if a package.json is present in the **js/** folder. The npm **build** script should use local paths for build systems and package managers, so people that simply want to build the app won't need to install npm libraries globally, e.g.:

**package.json**:
```json
"scripts": {
    "test": "node node_modules/gulp-cli/bin/gulp.js karma",
    "prebuild": "npm install && node_modules/bower/bin/bower install && node_modules/bower/bin/bower update",
    "build": "node node_modules/gulp-cli/bin/gulp.js"
}
```
## Server Side Adjustments

At the moment of writing Nextcloud does not support opening `*.stl` files, so `/nextcloud/config/mimetypemapping.json` must be created or extended. Here is an example file:

```json
{
	"stl": ["model/stl"]
}
```

## Running tests
You can use the provided Makefile to run all tests by using:

    make test

This will run the PHP unit and integration tests and if a package.json is present in the **js/** folder will execute **npm run test**

Of course you can also install [PHPUnit](http://phpunit.de/getting-started.html) and use the configurations directly:

    phpunit -c phpunit.xml

or:

    phpunit -c phpunit.integration.xml

for integration tests
