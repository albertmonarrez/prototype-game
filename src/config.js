import {preload} from "./preload.js";
import {create} from "./create.js";

export const screenWidth = 1200;
export const screenHeight = 800;

export const defaultConfig = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: screenWidth,
    height: screenHeight,
    scene: {
        preload: preload,
        create: create
    }
};

