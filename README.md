# Model Viewer

An 3D model viewer for Nextcloud.

## Description

This App enables your Nextcloud instance to render 3d models from within the files app. The Project is currently under development so there are not all features implemented yet. A Roadmap can be found in the [wiki](https://github.com/tgru/modelviewer/wiki/Roadmap).

## Building the app

The app can be build by calling `npm run build` from inside the `js` directory. This will download all external js dependencies and generate a bundle (`main.js`) from the sources. 

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
