import home from "./homeScene.js";
import levelTwo from "./level2.js";
import bootScene from "./boot.js";
import loading from "./loading.js";

export const screenWidth = 1200;
export const screenHeight = 800;

export const defaultConfig = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: screenWidth,
    height: screenHeight,
    //pixelArt: true,
    scene: [bootScene.bootScene, home.homeScene, levelTwo.LevelTwo]

};
