import {screenHeight, screenWidth} from "./constants";
import bootScene from "./scenes/boot";
import home from "./scenes/home";
import levelOne from "./scenes/level1";

const defaultConfig = {
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
let game = new Phaser.Game(defaultConfig);
