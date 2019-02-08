import home from "./homeScene.js";
import levelOne from "./level1.js";
import bootScene from "./boot.js";
import loading from "./loading.js";

export const screenWidth = 1200;
export const screenHeight = 800;

export const defaultConfig = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: screenWidth,
    height: screenHeight,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 1000},
            debug: true
        }
    },
    scene: [bootScene.bootScene, home.homeScene, levelOne.LevelOne],


};
