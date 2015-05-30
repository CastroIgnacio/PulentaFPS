var canvas = document.querySelector('#gameCanvas');

var engine = new BABYLON.Engine(canvas, true);

var scene = createScene();

engine.runRenderLoop(function () {
    scene.render();
});