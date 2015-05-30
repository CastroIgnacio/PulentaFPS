/**
 * Init global vars
 */
var engine,
    canvas,
    scene;

/**
 * Load the game on content load
 */
document.addEventListener('DOMContentLoaded', onGameLoad);

function onGameLoad() {
    canvas = document.querySelector('#gameCanvas');
    engine = new BABYLON.Engine(canvas, true);

    // Set as fullscreen and lock pointer on click
    canvas.addEventListener('click', function(){
        //only apply fullscreen and lockpointer if is not yet
        if(!engine.isFullscreen) {
            engine.switchFullscreen(true);
        }
    });

    //Scene create
    scene = createScene();

    //Init render loop
    engine.runRenderLoop(function () {
        scene.render();
    });
}