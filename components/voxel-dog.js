import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { animate } from 'framer-motion'

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
    const refContainer = useRef() // pointer to the container of the 3D Model
    const [loading, setLoading] = useState(true) // for the spinning animation
    const [renderer, setRenderer] = useState() // for rendering the scene and its attributes
    const[_camera, setCamera] = useState() // for viewing the Model from different angles
    const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0,))

    // This vector will be updated to look at the target from
    // multiple views in a continuous way
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI)
        )
    )
    const [scene] = useState(new THREE.Scene())
    const [_controls, setControls] = useState()

    const handleWindowResize = useCallback(() => {
        const { current: container } = refContainer
        if (container && renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            renderer.setSize(scW, scH)
        }
    }, [renderer])

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const { current: container } = refContainer
        if (container && !renderer) {
            // Get the size of the container
            const scW = container.clientWidth
            const scH = container.clientHeight

            // WebGL renderer displays the scenes using WebGL:
            // https://threejs.org/docs/#api/en/renderers/WebGLRenderer
            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })

            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            setRenderer(renderer)

            // 640 -> 240
            // 8 -> 6
            const scale = scH * 0.005 + 4.8
            const camera = new THREE.OrthographicCamera(
                -scale,     // left
                scale,      // right
                scale,      // top
                -scale,     // bottom
                0.01,       // near
                50000       // far
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)
            // color: light gray, intensity: max
            const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
            scene.add(ambientLight)
            
            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            setControls(controls)

            loadGLTFModel(scene, '/dog.glb', {
                receiveShadow: false,
                castShadow: false
            }).then(() => {
                animate()
                setLoading(false)
            })

            let req = null
            let frame = 0
            const animate = () => {
                req = requestAnimationFrame(animate)

                frame = frame <= 100 ? frame + 1 : frame

                if(frame <= 100) {
                    const p = initialCameraPosition     // p is a 3D vector
                    const rotSpeed = -easeOutCirc(frame / 120) *  Math.PI * 20

                    // Don't move on the y-axis
                    camera.position.y = 10
                    // The x position will depend also on the z position
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                } else {
                    controls.update()
                }

                renderer.render(scene, camera)
            }

            return () => {
                cancelAnimationFrame(req)
                renderer.dispose()
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
            window.removeEventListener('resize', handleWindowResize, false)
        }
    }, [renderer, handleWindowResize])

    return (
        <Box
            ref={refContainer}
            className='voxel-dog'
            m="auto"
            mt={['-20px', '-60px', '-120px']}
            mb={['-40px', '-140px', '-200px']}
            w={[280, 480, 640]}
            h={[280, 480, 640]}
            position="relative"
        >
            {loading && (
                <Spinner
                    size="xl"
                    position="absolute"
                    left="50%"
                    top="50%"
                    ml="calc(0px - var(--spinner-size) / 2)"
                    mt="calc(0px - var(--spinner-size))"
                />
            )}
        </Box>
    )
}

export default VoxelDog