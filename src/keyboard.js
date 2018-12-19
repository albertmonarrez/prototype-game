import pauseMenu from './homeScene.js';
import level2 from './level2.js';

const KEYFUNCTIONMAP = {};

class Keyboard {
    constructor(scene, keyFunctionMap = KEYFUNCTIONMAP) {
        this.scene = scene;
        this.keyFunctionMap = keyFunctionMap;
        this.setupKeyboard();
    }

    setupKeyboard() {
        this.scene.input.keyboard.on('keyup', this.executeKeyAction,this);
    }

    executeKeyAction(keyboard) {
        let func = this.keyFunctionMap[keyboard.key];
        if (func) {
            func(this);
            return;

        }
        console.log("No function associated with " + keyboard.key);
    }

}


function switchScene(self) {
    let currentScene = self.scene.key;
    let scene = pauseMenu.sceneName;
    if (currentScene === pauseMenu.sceneName)
        scene = level2.sceneName;
    console.log('Current scene is:' + currentScene + ' switching scene to ' + scene);
    self.scene.start(scene);
}

export default {Keyboard};