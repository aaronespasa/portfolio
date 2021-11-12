// glTF (GL Transmission Format) is used for efficient delivery and loading of 3D content.

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
    scene,
    glbPath,
    options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()

        loader.load(
            // Resource URL (example: dog.glb)
            glbPath,

            // Called when the resource is loaded
            gltf => {
                const obj = gltf.scene
                obj.name = 'dog'
                obj.position.y = 0
                obj.position.x = 0
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow
                scene.add(obj)

                obj.traverse(function(child) {
                    if(child.isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = receiveShadow
                    }
                })

                resolve(obj)
            },
            // Here could be a function we call while loading is progressing
            undefined,
            // This function will be called if the loading have errors
            function(error) {
                reject(error)
            }
        )
    })
}