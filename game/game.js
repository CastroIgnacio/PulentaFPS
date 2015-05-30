var canvas = document.querySelector('#gameCanvas');

var engine = new BABYLON.Engine(canvas, true);
var ground ;
var createScene = function () {

    var scene = new BABYLON.Scene(engine);

    scene.clearColor = new BABYLON.Color3(0, 1, 0);

    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);

    camera.setTarget(BABYLON.Vector3.Zero());
    camera.speed = 0.5;
    camera.applyGravity = true;
    camera.checkCollisions = true;

    camera.attachControl(canvas, false);

    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

    light.intensity = 0.5;

    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
    sphere.checkCollisions = true;
    sphere.position.y = 1;

    ground = BABYLON.Mesh.CreateGround('ground1', 60, 60, 50, scene);
    ground.checkCollisions = true;

    return scene;

};

var scene = createScene();

engine.runRenderLoop(function () {
    scene.render();
});