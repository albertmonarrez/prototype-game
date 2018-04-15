import keyboard from "./keyboard.js";

const sceneName = "LevelTwo";

class LevelTwo extends Phaser.Scene {
    constructor() {
        super({key: sceneName});
    }

    create() {
        keyboard.setupKeyboard(this);

    }

}

export default {sceneName, LevelTwo};