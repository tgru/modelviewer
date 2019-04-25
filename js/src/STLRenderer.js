import {ModelRenderer} from './ModelRenderer'
import * as THREE from 'three'
import three_stl_loader from 'three-stl-loader'
const STLLoader = three_stl_loader(THREE)

export class STLRenderer extends ModelRenderer {
    id = 0
    canvas = null

    camera = null
    scene  = null
    renderer = null

    mesh = null

    constructor(width, height) {
        super(width, height)

        this.camera = new THREE.PerspectiveCamera(
            70,
            width / height,
            0.01,
            1000
        )

        this.scene = new THREE.Scene()

        this.renderer = new THREE.WebGLRenderer( { antialias: true } )
        this.renderer.setSize(width, height)
        this.canvas = this.renderer.domElement
    }

    animate() {
        this.id = requestAnimationFrame( this.animate.bind(this) )

        this.mesh.rotation.z += 0.01

        this.renderer.render( this.scene, this.camera )
    }

    load(path) {
        let loader = new STLLoader()
        loader.load(path, geometry => {
            console.log(geometry)
            let mat = new THREE.MeshNormalMaterial()
            this.mesh = new THREE.Mesh(geometry, mat)

            this.mesh.rotation.x = -0.5 * Math.PI

            this.scene.add(this.mesh)
            this.autozoom()
            this.animate()
        })
    }

    destroy() {
        cancelAnimationFrame(this.id)
        this.id = 0

        this.camera = null
        this.scene  = null
        this.renderer = null

        this.mesh = null

        this.canvas = null
    }

    getCanvas() {
        return this.canvas
    }

    resize(width, height) {
        this.renderer.setSize(width, height)
        this.camera.aspect = width / height
        this.camera.updateProjectionMatrix()
    }

    autozoom() {
        let boundingBox = new THREE.Box3()
        boundingBox.setFromObject( this.mesh )

        let boundingBoxSize = new THREE.Vector3()
        boundingBox.getSize(boundingBoxSize)

        let max = Math.max(
           boundingBoxSize.x,
           boundingBoxSize.y,
           boundingBoxSize.z
        )

        let boundingBoxCenter = new THREE.Vector3()
        boundingBox.getCenter(boundingBoxCenter)

        let fov = this.camera.fov/180*Math.PI

        let distance = (0.5*max) * (Math.cos(fov/2)) / (Math.sin(fov/2))
        let position = new THREE.Vector3(distance, distance, distance)
        position.add(boundingBoxCenter)

        this.camera.position.set(position.x, position.y, position.z)
        this.camera.lookAt(boundingBoxCenter)
    }
}