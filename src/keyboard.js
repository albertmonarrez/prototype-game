import pauseMenu from './levelOne.js';
import level2 from './level2.js';

function setupKeyboard(self) {
    self.input.keyboard.on('keyup', checkKeys, self);

}

function checkKeys(keyboard) {
    let func = KEYFUNCTIONMAP[keyboard.key];
    if (func)
        func(this);
}

const KEYFUNCTIONMAP = {'Escape': switchScene};

function switchScene(self) {
    let currentScene = self.scene.key;
    let scene = pauseMenu.sceneName;
    if (currentScene === pauseMenu.sceneName)
        scene = level2.sceneName;
    console.log('Current scene is:' + currentScene + ' switching scene to ' + scene);
    self.scene.start(scene);
}

export default {setupKeyboard};