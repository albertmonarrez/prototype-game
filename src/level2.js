import keyboard from "./keyboard.js";

const sceneName = "LevelTwo";

class LevelTwo extends Phaser.Scene {
    constructor() {
        super({key: sceneName});
    }

    create() {
        console.log('level 2 create');

    }

}

export default {sceneName, LevelTwo};