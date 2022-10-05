import * as THREE from "three"

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import RAF from '../utils/RAF'
import config from '../utils/config'
import MyGUI from '../utils/MyGUI'

import simpleFrag from '../shaders/simple.frag'
import simpleVert from '../shaders/simple.vert'

import colorFrag from '../shaders/color.frag'
import colorVert from '../shaders/color.vert'

import ParticleSystem from './ParticleSystem'

class MainThreeScene {
    constructor() {
        this.bind()
        this.camera
        this.scene
        this.renderer
        this.controls
    }

    init(container) {
        //RENDERER SETUP
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.debug.checkShaderErrors = true
        container.appendChild(this.renderer.domElement)

        //MAIN SCENE INSTANCE
        this.scene = new THREE.Scene()

        //CAMERA AND ORBIT CONTROLLER
        this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10)
        this.camera.position.set(0, 0, 3)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enabled = config.controls
        this.controls.maxDistance = 1500
        this.controls.minDistance = 0

        //ParticleSystem.init(this.scene)

        this.uniforms = {
            uTime: {
                value: 0
            }
        }

        //DUMMY CUBE + SIMPLE GLSL SHADER LINKAGE
        const shaderOne = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: simpleVert,
            fragmentShader: simpleFrag,
        })

        const shaderTwo = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: colorVert,
            fragmentShader: colorFrag,
        })

        const plane = new THREE.Mesh(new THREE.PlaneBufferGeometry( 5, 5 ), shaderOne)
        this.scene.add(plane)

        MyGUI.hide()
        if (config.myGui)
            MyGUI.show()

        //RENDER LOOP AND WINDOW SIZE UPDATER SETUP
        window.addEventListener("resize", this.resizeCanvas)
        RAF.subscribe('threeSceneUpdate', this.update)
    }

    update() {
        this.renderer.render(this.scene, this.camera);
        this.uniforms.uTime.value += 1;
        //ParticleSystem.update();
    }

    resizeCanvas() {
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
    }

    bind() {
        this.resizeCanvas = this.resizeCanvas.bind(this)
        this.update = this.update.bind(this)
        this.init = this.init.bind(this)
    }
}

const _instance = new MainThreeScene()
export default _instance