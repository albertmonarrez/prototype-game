import {preload} from "./preload.js";
import {create} from "./create.js";

export const default_config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

