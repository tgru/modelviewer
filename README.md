# Model Viewer

![Coverage-shield-badge-1](https://img.shields.io/badge/Coverage-37.31%25-red.svg)

An 3D model viewer for Nextcloud based on [three.js](https://threejs.org/).

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

You can run the javascript tests by calling `npm run test` from within the `js` directory.