import levelOne from "./levelOne.js";
import levelTwo from "./level2.js";

export const screenWidth = 1200;
export const screenHeight = 800;

export const defaultConfig = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: screenWidth,
    height: screenHeight,
    scene: [levelOne.LevelOne, levelTwo.LevelTwo]

};
