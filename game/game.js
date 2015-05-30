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
    var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
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
    scene = createScene(mobile);

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