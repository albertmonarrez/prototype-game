import {preload} from "./preload.js";
import {create} from "./create.js";

const sceneName = "LevelOne";

class LevelOne extends Phaser.Scene {
    constructor() {
        super({key: sceneName});
        this.preload = preload;
        this.create = create;
    }

}

export default {sceneName, LevelOne};