import {STLRenderer} from './STLRenderer'

var modelViewer = {
    mimeTypes: [
        'model/stl'
    ],
    overlay: null,
    window: null,
    container: null,
    renderer: null,
    setup: function () {
        modelViewer.window = document.createElement('div')
        modelViewer.window.setAttribute('id', 'modelviewer-window')

        var exitButton = document.createElement('button')
        exitButton.setAttribute('id', 'modelviewer-button')
        exitButton.classList.add("icon-close")
        exitButton.addEventListener("click", modelViewer.hide)
        modelViewer.window.appendChild(exitButton)

        modelViewer.container = document.createElement('div')
        modelViewer.container.setAttribute('id', 'modelviewer-container')
        modelViewer.window.appendChild(modelViewer.container)

        modelViewer.overlay = document.createElement('div')
        modelViewer.overlay.setAttribute('id', 'modelviewer-overlay')

        modelViewer.overlay.addEventListener("click", modelViewer.hide)
    },
    show: function (file, data) {
        if( document.body.contains(modelViewer.window) || document.body.contains(modelViewer.overlay))
            return

        document.body.appendChild(modelViewer.overlay)
        document.body.appendChild(modelViewer.window)

        let w = modelViewer.container.offsetWidth
        let h = modelViewer.container.offsetHeight
        modelViewer.renderer = new STLRenderer(w, h)

        modelViewer.container.appendChild(modelViewer.renderer.getCanvas())

        let path = data.fileList.getDownloadUrl(file, data.dir)
        modelViewer.renderer.load(path)
    },
    hide: function () {
        if( !(document.body.contains(modelViewer.window) || document.body.contains(modelViewer.overlay)) )
            return

        modelViewer.container.removeChild(modelViewer.renderer.getCanvas())
        modelViewer.renderer.destroy()
        document.body.removeChild(modelViewer.overlay)
        document.body.removeChild(modelViewer.window)
    }
}

modelViewer.setup()

document.addEventListener("DOMContentLoaded", function () {
    for(var i = 0; i< modelViewer.mimeTypes.length; i++) {
        OCA.Files.fileActions.register(modelViewer.mimeTypes[i], 'Show', OC.PERMISSION_READ, '', modelViewer.show)
        OCA.Files.fileActions.setDefault(modelViewer.mimeTypes[i], 'Show')
    }
})