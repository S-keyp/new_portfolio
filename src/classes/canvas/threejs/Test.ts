import * as THREE from 'three'
import { Clock, InstancedMesh, MathUtils, MeshNormalMaterial, Vector3 } from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import { ShadowMapViewer } from 'three/examples/jsm/utils/ShadowMapViewer';
// import { ShadowMapViewer } from 'three/addons/utils/';

export default class CanvasThreeJs {
    
    canvasClass: HTMLCanvasElement | null
    camera: THREE.PerspectiveCamera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    // mixer: THREE.AnimationMixer

    //let spotLight: THREE.SpotLight
    //let spotLightShadowMapViewer: ShadowMapViewer
    dirLight: THREE.DirectionalLight
    // let dirLightShadowMapViewer: ShadowMapViewer

    // cube: THREE.Mesh
    // let rotor: THREE.Object3D<THREE.Event>

    time: THREE.Clock
    totalTime: number = 0
    deltaTime: number

    initialPositionCamera: Vector3 = new Vector3(0, 1, 10)
    // scrollY: number
    totalScrollY: number = 0

    constructor(){
        const container = document.querySelector('#main')
        this.canvasClass = container!.querySelector('#c')
        // const labelContainer = container!.querySelector('#labels')

        console.log('this.canvasClass', this.canvasClass);

        //Get the wheel scroll on the overlay to animate
        // const overlay = container.querySelector('.overlay')
        // overlay.addEventListener('wheel', function(event: WheelEvent){
        //     scrollY = event.deltaY / 100 //If device == IOS or device.width < 720px ===> scrollY = event.deltaY / 10
        //     totalScrollY += scrollY
        // })


        //const container = document.createElement('div')
        // document.body.appendChild(container!)

        // camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.25, 200)
        // camera.position.set(initialPositionCamera.x, initialPositionCamera.y, initialPositionCamera.z) 
        
        
        this.scene = new THREE.Scene()
        this.time = new THREE.Clock()
        console.log('this.time', this.time);
        this.deltaTime = 0
        
        this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
        this.camera.position.set( 0, 2.5, 7 );
        this.camera.lookAt( 0, 1, 0 );

        this.scene.background = new THREE.Color( 0xa0a0a0 );
        this.scene.fog = new THREE.Fog( 0xa0a0a0, 10, 50 );

        const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x00000 );
        hemiLight.position.set( 0, 20, 0 );
        this.scene.add( hemiLight );

        this.dirLight = new THREE.DirectionalLight( 0xffffff );
        this.dirLight.position.set( - 3, 10, - 10 );
        this.dirLight.castShadow = true;
        this.dirLight.shadow.camera.top = 10;
        this.dirLight.shadow.camera.bottom = - 10;
        this.dirLight.shadow.camera.left = - 10;
        this.dirLight.shadow.camera.right = 10;
        this.dirLight.shadow.camera.near = 0.1;
        this.dirLight.shadow.camera.far = 40;
        this.dirLight.name = 'dirLight';
        this.dirLight.shadow.mapSize.width = 2048;
        this.dirLight.shadow.mapSize.height = 2048;

        this.scene.add( this.dirLight );






        //GEOMETRY
        const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );    
        mesh.rotation.x = - Math.PI / 2
        mesh.receiveShadow = true
        this.scene.add(mesh)

        
        // const turbineLoader = new GLTFLoader().setPath('models/')
        // const dracoLoader = new DRACOLoader()

        // dracoLoader.setDecoderPath( 'draco/' )
        // dracoLoader.setDecoderConfig({type: 'js'})
        // turbineLoader.setDRACOLoader( dracoLoader )

        // turbineLoader.load('windfit-box-detailed.glb', function (gltf) {

        //     const model = gltf.scene
        //     model.scale.set(0.5, 0.5, 0.5)
        //     model.traverse( function ( object: any ) {

        //         if ( object.isMesh ) object.castShadow = true;

        //     } );
            
        //     model.position.set(-2, 0, 0)
        //     scene.add(model)    
        //     debugger
        // })
        
        // turbineLoader.load('windfit-box-polygon.glb', function (gltf) {

        //     const model = gltf.scene
        //     model.scale.set(0.5, 0.5, 0.5)
        //     model.traverse( function ( object: any ) {

        //         if ( object.isMesh ) object.castShadow = true;

        //     } );
            
        //     model.position.set(2, 0, 0)
        //     scene.add(model)

        //     render()
        // })

        // initShadowMapViewers();
        let canvas = this.canvasClass!
        this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.BasicShadowMap;
        container!.appendChild(this.renderer.domElement)

        const controls = new OrbitControls(this.camera, this.renderer.domElement)
        // controls.addEventListener('change', this.render) // use if there is no animation loop
        controls.minDistance = 1
        controls.maxDistance = 100
        controls.target.set(0, 1, 0)
        controls.update()

        // window.addEventListener('resize', onWindowResize)

        this.animate()
    }





    // initShadowMapViewers() {

    //     dirLightShadowMapViewer = new ShadowMapViewer( dirLight );
    //     resizeShadowMapViewers();

    // }

    // resizeShadowMapViewers() {

    //     const size = window.innerWidth * 0.15;

    //     dirLightShadowMapViewer.position.x = 10;
    //     dirLightShadowMapViewer.position.y = 10;
    //     dirLightShadowMapViewer.size.width = size;
    //     dirLightShadowMapViewer.size.height = size;
    //     dirLightShadowMapViewer.update(); //Required when setting position or size directly

    ////     spotLightShadowMapViewer.size.set( size, size );
    ////     spotLightShadowMapViewer.position.set( size + 20, 10 );
    ////     spotLightShadowMapViewer.update();	//NOT required because .set updates automatically

    // }

    // function onWindowResize() {
        
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();

    //     renderer.setSize( window.innerWidth, window.innerHeight );

    //     resizeShadowMapViewers();
    //     dirLightShadowMapViewer.updateForWindowResize();
    //     //spotLightShadowMapViewer.updateForWindowResize();

    //     render()
    // }

    // function renderShadowMapViewers() {

    //     dirLightShadowMapViewer.render( renderer );
    //     //spotLightShadowMapViewer.render( renderer );

    // }

    render() {
        this.renderer.render(this.scene, this.camera)
        // renderShadowMapViewers();
    }




    
    // alpha: number = 0
    // const stdAnimDuration = 2.5    
    // const animDuration = 6
    // const maxScroll = 450

    // function easeInOutQuint(x: number): number {
    //     return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2
    // }

    // function scrollCamAB(start: THREE.Vector3, end: THREE.Vector3, animDuration: number): number{
    //     if(scrollY != undefined) alpha += ( scrollY / maxScroll ) * ( stdAnimDuration / animDuration )
    //     if(alpha>0&&alpha<1) camera.position.lerpVectors(start, end, easeInOutQuint(alpha)) 
    //     else if(alpha <= 0) return 0
    //     else return 1
    // }

    //UPDATE CAM
    // function updateCamera(): void{


    //     // let destPoint = new Vector3(0, 5, 1) 
    //     let destPoint = new Vector3(0, 0, 0) 
    //     scrollCamAB(initialPositionCamera, destPoint, animDuration)
        
    //     {
    //         //CAMERA AUTO TRAVEL
    //         //totalTime += delta
    //         //const animDuration = 6

    //         //let alpha = totalTime / animDuration 
    //         //if(alpha>0&&alpha<1) camera.position.lerpVectors(initialPositionCamera, destPoint, easeInOutQuint(alpha)) 

    //     }
    // }


    animate(): void{

        // debugger
        this.deltaTime = this.time.getDelta()
        
        // updateCamera()
        // camera.lookAt(0, 5, 0)
        // try{mixer.update( deltaTime )}
        // catch(error){console.log( error )}
        requestAnimationFrame( this.animate.bind(this) );
        this.render();

    }
}