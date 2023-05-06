import { useColorScheme } from '@mui/joy';
import { FC, useEffect, useRef } from 'react';
import { AdditiveBlending, BufferAttribute, BufferGeometry, Color, Group, Line, LineBasicMaterial, MultiplyBlending, PerspectiveCamera, Points, PointsMaterial, Scene, Sprite, SpriteMaterial, Texture, TextureLoader, TorusKnotGeometry, Vector3, WebGLRenderer } from 'three';
import SpriteUrl from '../../assets/sprite.png';
// import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface IProps {

}
let animateReq: any

const Three: FC<IProps> = props => {

    const { mode } = useColorScheme()

    const canvas = document.getElementById('canvas') as HTMLCanvasElement

    const OBJ = useRef<any>({})

    const version1 = () => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement

        let mouseX = 0,
            mouseY = 0,
            windowHalfX = window.innerWidth / 2,
            windowHalfY = window.innerHeight / 2,
            SEPARATION = 200,
            AMOUNTX = 10,
            AMOUNTY = 10

        const camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            10000
        )
        const scene = new Scene()
        const renderer = new WebGLRenderer({ alpha: true, canvas })
        OBJ.current.renderer = renderer

        init()
        animate()

        function init() {

            var
                separation = 100,
                amountX = 50,
                amountY = 50,
                particle


            // renderer =  // gradient this can be swapped for WebGLRenderer
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setClearColor(new Color(mode === 'dark' ? 0x25252d : 0xebebef))
            // container.appendChild(renderer.domElement)

            camera.position.z = 100


            // particles
            var PI2 = Math.PI * 2
            var material = new SpriteMaterial({
                color: 0xffffff,
            })

            new TextureLoader().load(SpriteUrl, (map) => {
                material.map = map
                material.needsUpdate = true
            })

            var geometry = new BufferGeometry()
            const vertices = [] as number[]
            for (var i = 0; i < 100; i++) {
                particle = new Sprite(material)
                particle.position.x = Math.random() * 2 - 1
                particle.position.y = Math.random() * 2 - 1
                particle.position.z = Math.random() * 2 - 1
                particle.position.normalize()
                particle.position.multiplyScalar(Math.random() * 10 + 450)
                particle.scale.x = particle.scale.y = 10
                scene.add(particle)
                vertices.push(particle.position.x, particle.position.y, particle.position.z)
                // geometry.vertices.push(particle.position)
            }
            geometry.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3))

            // lines
            var line = new Line(geometry, new LineBasicMaterial({ color: 0xffffff, opacity: 0.5 }))
            scene.add(line)

            // mousey
            window.addEventListener('mousemove', onDocumentMouseMove, false)
            window.addEventListener('touchstart', onDocumentTouchStart, false)
            window.addEventListener('touchmove', onDocumentTouchMove, false)

            window.addEventListener('resize', onWindowResize, false)

        } // end init()

        function onWindowResize() {

            windowHalfX = window.innerWidth / 2
            windowHalfY = window.innerHeight / 2

            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()

            renderer.setSize(window.innerWidth, window.innerHeight)

        }

        function onDocumentMouseMove(event: MouseEvent) {

            mouseX = event.clientX - windowHalfX
            mouseY = event.clientY - windowHalfY

        }

        function onDocumentTouchStart(event: TouchEvent) {

            if (event.touches.length > 1) {

                event.preventDefault()

                mouseX = event.touches[0].pageX - windowHalfX
                mouseY = event.touches[0].pageY - windowHalfY

            }
        }

        function onDocumentTouchMove(event: TouchEvent) {

            if (event.touches.length == 1) {

                event.preventDefault()

                mouseX = event.touches[0].pageX - windowHalfX
                mouseY = event.touches[0].pageY - windowHalfY

            }
        }

        function animate() {

            requestAnimationFrame(animate)
            render()

        }

        function render() {

            camera.position.x += (mouseX - camera.position.x) * .01
            camera.position.y += (- mouseY + 200 - camera.position.y) * .05
            camera.lookAt(scene.position)

            renderer.render(scene, camera)

        }

    }

    const version2 = () => {

        canvas.style.visibility = 'visible'

        let mouseX = 1
        let mouseY = 1
        let windowHalfX = window.innerWidth / 2
        let windowHalfY = window.innerHeight / 2
        let moveMode = 'mouse' as 'mouse' | 'touch'

        const scene = new Scene()

        const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 20, 1000)
        camera.position.set(0, 0, 0)

        // @ts-ignore
        window.scene = scene; window.camera = camera

        const renderer = new WebGLRenderer({ alpha: true, canvas })
        OBJ.current.renderer = renderer
        renderer.setClearColor(new Color(0x000000))
        renderer.setSize(window.innerWidth, window.innerHeight)

        const orbit = new OrbitControls(camera, canvas)
        orbit.target.set(0, 0, 0)

        const material = new PointsMaterial({
            color: 0xffffff,
            size: 3,
            depthWrite: false,
        })

        const maxRadius = 200
        const minRadius = 200
        const minTube = 80
        const maxTube = 80
        const shapeProps = {
            radius: minRadius,
            tube: minTube,
            radialSegments: 200,
            tubularSegments: 12,
            p: 5,
            q: 4,
            heightScale: 4,
        }

        init()
        render()

        function onDocumentMouseMove(event: MouseEvent) {

            mouseX = event.clientX - windowHalfX
            mouseY = event.clientY - windowHalfY
            moveMode = 'mouse'
        }

        function onDocumentTouchStart(event: TouchEvent) {

            if (event.touches.length > 1) {

                event.preventDefault()

                mouseX = event.touches[0].pageX - windowHalfX
                mouseY = event.touches[0].pageY - windowHalfY
                moveMode = 'touch'
            }
        }

        function onDocumentTouchMove(event: TouchEvent) {

            if (event.touches.length == 1) {

                event.preventDefault()

                mouseX = event.touches[0].pageX - windowHalfX
                mouseY = event.touches[0].pageY - windowHalfY

                moveMode = 'touch'
            }
        }

        function onWindowResize() {

            windowHalfX = window.innerWidth / 2
            windowHalfY = window.innerHeight / 2

            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()

            renderer.setSize(window.innerWidth, window.innerHeight)

        }

        function regeneratePoints() {
            scene.remove(scene.children[0])

            const multiplierX = maxRadius / windowHalfX * 2
            const multiplierY = maxTube / windowHalfY * 2
            const radius = Math.max(minRadius, multiplierX * Math.abs(mouseX))
            const tube = Math.max(minTube, multiplierY * Math.abs(mouseY))

            shapeProps.radius = radius
            shapeProps.tube = tube

            scene.add(generatePoints())
        }

        function regenerateSprite(mode: 'dark' | 'light') {
            material.map = generateSprite(mode)
            material.blending = mode === 'dark' ? AdditiveBlending : MultiplyBlending
            material.needsUpdate = true
            regeneratePoints()
        }

        OBJ.current.regenerateSprite = regenerateSprite

        function generateSprite(mode: 'dark' | 'light') {

            var canvas = document.createElement('canvas')
            canvas.width = 16
            canvas.height = 16

            var context = canvas.getContext('2d') as CanvasRenderingContext2D
            var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2)

            if (mode === 'dark') {
                gradient.addColorStop(0, 'rgba(255,255,255,1)')
                gradient.addColorStop(0.2, 'rgba(0,255,255,1)')
                gradient.addColorStop(0.4, 'rgba(0,0,64,1)')
                gradient.addColorStop(1, 'rgba(0,0,0,1)')
            }
            else {
                gradient.addColorStop(0, 'rgba(181, 181, 181,1)')
                // gradient.addColorStop(0, 'rgba( 212, 238, 250,1)')
                // gradient.addColorStop(0, 'rgba(252, 204, 251 ,1)')
                // gradient.addColorStop(0, 'rgba(255, 0,0 ,1)')
                // gradient.addColorStop(0.8, 'rgba(181, 181, 181,1)')
                gradient.addColorStop(1, 'rgba(255,255,255,1)')
                // gradient.addColorStop(1, 'rgba(0,0,64,1)')
                // gradient.addColorStop(1, 'rgba(255,255,255,1)')
            }

            // console.log("sprite");


            context.fillStyle = gradient
            context.fillRect(0, 0, canvas.width, canvas.height)

            // document.body.innerHTML = ''
            // document.body.appendChild(canvas)

            var texture = new Texture(canvas)
            texture.needsUpdate = true
            // console.log(texture);

            return texture

        }

        function getLines(geometry: BufferGeometry) {
            let geometryPosition = geometry.getAttribute('position')
            let points = [];
            for (let i = 0; i < geometryPosition.count; i++) {
                let p = new Vector3().fromBufferAttribute(geometryPosition as BufferAttribute, i); // set p from `position`
                points.push(p);
            }
            const nth = 2
            let i = Math.floor(points.length / nth);

            while (i--) {
                points.splice((i + 1) * nth - 1, 1);
            }

            i = Math.floor(points.length / nth);

            while (i--) {
                points.splice((i + 1) * nth - 1, 1);
            }

            const lineMaxLength = 1
            const group = new Group()
            const material = new LineBasicMaterial({ color: 0xffffff })

            for (const p of points) {
                // Randomize to range [0, 2]
                const randomRadius = Math.random() * lineMaxLength;

                // Create vec3
                const randomVec = p.clone()

                // Make vector point in a random direction with a radius of 1
                randomVec.randomDirection();

                // Scale vector to match random radius
                randomVec.multiplyScalar(randomRadius);

                console.log(p);


                // const geo = new Line3(p, randomVec)
                group.add(new Line(new BufferGeometry().setFromPoints([p, randomVec]), material))
            }

            // console.log(points);
            return group
        }

        function generatePoints() {
            const geom = new TorusKnotGeometry(
                shapeProps.radius,
                shapeProps.tube, Math.round(shapeProps.radialSegments),
                Math.round(shapeProps.tubularSegments),
                Math.round(shapeProps.p),
                Math.round(shapeProps.q),
                // controls.heightScale
            )

            const geometry = new BufferGeometry();
            geometry.setAttribute('position', geom.getAttribute('position'));
            const points = new Points(geometry, material)

            // const group = new Group()
            // group.add(points)
            // group.add(getLines(geometry))
            // getLines(geometry)

            return points
        }

        function init() {
            document.addEventListener('mousemove', onDocumentMouseMove, false)
            window.addEventListener('touchstart', onDocumentTouchStart, false)
            window.addEventListener('touchmove', onDocumentTouchMove, false)
            window.addEventListener('resize', onWindowResize, false)

            scene.add(generatePoints())
        }

        function render() {

            if (moveMode === 'mouse') {
                camera.position.x += (mouseX - camera.position.x) * .0001
            }
            else {
                camera.position.y += (- mouseY - camera.position.y) * .001
            }

            animateReq = requestAnimationFrame(render)
            renderer.render(scene, camera)
            orbit.update()
        }
    }


    useEffect(() => {
        version2()
        return () => {
            window.cancelAnimationFrame(animateReq)
            canvas.style.visibility = 'hidden'
        }
    }, [])

    useEffect(() => {
        if (OBJ.current) {
            if (OBJ.current.renderer)
                OBJ.current.renderer.setClearColor(new Color(mode === 'dark' ? 0x25252d : 0xebebef))
            if (OBJ.current.regenerateSprite)
                OBJ.current.regenerateSprite(mode)
        }
    }, [mode])

    return <></>
}

export default Three