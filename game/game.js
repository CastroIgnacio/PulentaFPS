/**
 * Init global vars
 */
var engine,
    canvas,
    scene;

//Add usefull listener
window.addEventListener('DOMContentLoaded', onGameLoad);
window.addEventListener('resize', onResize);

/**
 * Load the game on content load
 */
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

/**
 * Resize renderer on windows resize
 */
function onResize() {
    engine.resize();
}