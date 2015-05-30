/**
 * Init global vars
 */
var engine,
    canvas,
    scene;


/**
 * Load the game on content load
 */
document.addEventListener("DOMContentLoaded", onGameLoad);

function onGameLoad() {
    canvas = document.querySelector('#gameCanvas');
    engine = new BABYLON.Engine(canvas, true);
    scene = createScene();

    engine.runRenderLoop(function () {
        scene.render();
    });
}