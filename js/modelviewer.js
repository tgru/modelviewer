var modelViewer = {
    mimeTypes: [
        'model/stl'
    ],
    show: function (file, data) {
        alert(file)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    for(var i = 0; i< modelViewer.mimeTypes.length; i++) {
        OCA.Files.fileActions.register(modelViewer.mimeTypes[i], 'Show', OC.PERMISSION_READ, '', modelViewer.show)
        OCA.Files.fileActions.setDefault(modelViewer.mimeTypes[i], 'Show')
    }
})