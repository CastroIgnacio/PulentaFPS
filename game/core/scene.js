var createScene = function (mobile) {

    var scene = new BABYLON.Scene(engine);

    scene.clearColor = new BABYLON.Color3(0, 1, 0);

    var camera = mobile ? new BABYLON.VirtualJoysticksCamera('camera1', new BABYLON.Vector3(0, 5, -10) , scene) : new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);

    camera.setTarget(BABYLON.Vector3.Zero());
    camera.speed = 0.5;
    camera.inertia = 0;
    camera.applyGravity = true;
    camera.checkCollisions = true;

    camera.attachControl(canvas, false);

    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

    light.intensity = 0.5;

    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
    sphere.checkCollisions = true;
    sphere.position.y = 1;

    var ground = BABYLON.Mesh.CreateGround('ground1', 60, 60, 50, scene);
    ground.checkCollisions = true;


    scene.registerBeforeRender(moverSphere);

    var delta = 0;

    var pos = {
        x: sphere.position.x,
        y: sphere.position.y,
        z: sphere.position.z,
        radio: 10
    };

    function moverSphere() {
        delta = delta + engine.deltaTime / 1000;
        sphere.position.x =  pos.x + Math.sin(delta) * pos.radio;
        sphere.position.z =  pos.z + Math.cos(delta) * pos.radio;
    };

    return scene;

};
