# Documentation 

- You can either create your own new react app or clone already built app and do changes
- For Both Option Instructions have been mentioned
- Refer to [Webinar Video](https://www.youtube.com/watch?v=dVw6fJDxE2E&ab_channel=HackClubNMIT)
### Installation of React App

React App [Install](https://create-react-app.dev/docs/getting-started/)

Install the dependencies and devDependencies and start the server.

```sh
$ npx create-react-app ProjectName
$ yarn add three react-three-fiber react-spring sass drei use-cannon
$ yarn start
```
### OR

### To Clone and Start the App

```sh
$ git clone worshop-repo-link
$ yarn install
$ yarn start
```
Paste the link in place of the placeholder (workshop-repo-link)

## Concepts 
- Below here is are topics that are going to be discussed in the webinar
- Keep refering to the [Three Js documentation] (https://threejs.org/docs/)
- For React or JSX , refer to [React Docs] (https://reactjs.org/docs/getting-started.html)

### React Basics :

> - State : The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.
> - Hooks : It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components.
> - Props : React allows us to pass information to a Component using something called props (stands for properties). Props are basically kind of global variable or object.

### Canvas

- Your go to for three js, renders three js elements
- components : WebGL renderer, camera, scene, etc

### Lighting

- Ambient Light: uniform light , cannot cast shadow
- Point Light : light emitted from a point
- Directional Light : Light coming from specific direction, source is at infity rays are parallel

### Mesh

An object which takes info like vertices, faces, materials , etc and return desired shape

#### Viewport
This is just an example of how viewport and camera works, to give you an idea of how you can position shapes and camera.
[view](https://www.figma.com/file/wzsdKPzumZNExJQaIcceyn/workshop?node-id=0%3A1)

#### Buffergeometry

An efficient way to present lines, mesh, position, face vertex within buffer. It doesnt heavy loads GPU

#### Material

Appearance of Object, it is renderer independent.
Types of Material Available in Three Js and React Three Fiber

>- MeshBasicMaterial
>- MeshStandardMaterial
>- MeshDepthMaterial
>- MeshDistanceMaterial
>- MeshLambertMaterial
>- MeshMatcapMaterial
>- MeshNormalMaterial
>- MeshPhongMaterial
>- MeshPhysicalMaterial
>- MeshToonMaterial
>- LineBasicMaterial
>- LineDashedMaterial
>- PointsMaterial
>- RawShaderMaterial
>- ShaderMaterial
>- ShadowMaterial
>- SpriteMaterial

#### useFrame() ( In react three fiber docs useRender)

It is hook which callback after every frame, used for effects , controls, postprocessing. It is a render loop in which you can use internal state as well.
**Important**: Never use in your Main canvas component or else it'll go into an infite callback loop
**Example :**
```sh 
const mesh = useRef(); 
```
```sh
useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.03));
mesh is an reference variable here, not the mesh as mentioned above
```
```sh
const { clock } = useThree();
useFrame(() => {
    mesh.current.position.x = Math.sin(clock.getElapsedTime());
  });
mesh is an reference variable here, not the mesh as mentioned above
```

#### Shadow

- castShadow : This property castshadow on a surface, this property is for mesh, directional light and point light
- recieveShadow : This property makes an object/ mesh recieve shadow, available for mesh 
- MapShadow : Every light that casts shadows all objects marked to cast shadows are rendered from the point of view of the light.

Now from Lights point of view we need to specify some properties of [Shadow Map](https://threejsfundamentals.org/threejs/lessons/threejs-shadows.html) 
  >- shadow-mapSize-width={1024}
  >- shadow-mapSize-height={1024}
  >- shadow-camera-far={50}
  >- shadow-camera-left={-10}
  >- shadow-camera-right={10}
  >- shadow-camera-top={10}
  >- shadow-camera-bottom={-10}

#### Drei

- Abstraction of React Three Fiber , made coding more easier by providing prebuilt shapes and effects
- Also Provides various controls as jsx tags , that would have been pretty complex to code
- Additionally gives shader, camera controls , etc

### Inspiration
[Game](https://2yqpv.csb.app/)



### Cannon Js
#### Three Js and Ammo Js based Physics Engine
- Lightweight than many ported physics engines.
- Open source JavaScript library.
- Uses an iterative Gauss-Seidel solver to solve constraints.



#### Ammo Js
- Bullet Physics Engine
Bullet is a physics engine which simulates collision detection, soft and rigid body dynamics
 'ammo' stands for "Avoided Making My Own js physics engine by compiling bullet from C++"


### Use Cannon 
To install [npm package](https://www.npmjs.com/package/use-cannon)
- Physics based hooks for react-three-fiber
- It's based on Cannon JS
- You can find proper documentation of use-cannon [here](https://github.com/pmndrs/use-cannon)

>- Important Hooks : 
> useBox
> useSphere
> usePlane
> Physics

### useFrame 
If you're running effects, postprocessings, controls, etc that need to get updated every frame, useRender gives you access to the render-loop. You receive the internal state as well, which is the same as what you would get from useThree.
Refer to Previous Session [Docs](https://github.com/hackclubnmit/workshops/edit/master/011-Sep-20-2020/)

### GLTFLoaders
glTF (GL Transmission Format) is an open format specification for efficient delivery and loading of 3D content. Assets may be provided either in JSON (.gltf) or binary (.glb) format. External files store textures (.jpg, .png) and additional binary data (.bin). A glTF asset may deliver one or more scenes, including meshes, materials, textures, skins, skeletons, morph targets, animations, lights, and/or cameras.
- Refer To Three Js [Docs](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)

### OrbitControls
Orbit controls allow the camera to orbit around a target.


### Plugins and Links

| Packages | README |
| ------ | ------ |
| three | https://www.npmjs.com/package/three |
| react-three-fiber | https://www.npmjs.com/package/react-three-fiber |
| use-cannon | https://github.com/pmndrs/use-cannon |
|Cannon Js |https://schteppe.github.io/cannon.js/ |
|GLTFLoader|https://threejs.org/docs/#examples/en/loaders/GLTFLoader |
| react-spring      | [https://www.npmjs.com/package/react-spring]      |
| sass              | [https://www.npmjs.com/package/sass]              |
| sass | https://www.npmjs.com/package/sass |
| drei | https://www.npmjs.com/package/drei |
|Ammo Js|https://github.com/kripken/ammo.js/ |
