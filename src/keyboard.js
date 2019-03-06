const KEYFUNCTIONMAP = {};

class Keyboard {
    constructor(scene, keyFunctionMap = KEYFUNCTIONMAP) {
        this.scene = scene;
        this.keyFunctionMap = keyFunctionMap;
        this.setupKeyboard();
    }

    setupKeyboard() {
        this.scene.input.keyboard.on('keyup', this.executeKeyAction, this);
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

export default {Keyboard};