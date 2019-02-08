import {screenHeight, screenWidth} from "./config.js";

function loadBackground(self) {

    let imageName = "sky";
    let background = self.add.image(getScreenCenterWidth(), getScreenCenterHeight(), imageName);
    let scaleWidth = calculateScaleToFillScreen(background.width, screenWidth);
    let scaleHeight = calculateScaleToFillScreen(background.height, screenHeight);
    background.setScale(scaleWidth, scaleHeight);

}

function calculateScaleToFillScreen(number, screenWidthOrHeight) {
    /**
     * figures out the scale needed to multiply a number by to fill the entire screen
     */
    return screenWidthOrHeight / number;
}

function getScreenCenter() {
    /**
     * Gets the center coordinates of the current screen width/height
     */
    return [getScreenCenterWidth(), getScreenCenterHeight()];

}

function getScreenCenterWidth() {
    return calculateCenter(screenWidth);
}

function getScreenCenterHeight() {
    return calculateCenter(screenHeight);

}

function calculateCenter(number) {
    /**
     * Figures out what the center coordinates should be based on the passed
     * in number
     */
    return number / 2;

}

const addBackground = (backgroundName, gameScene, fitToScreen = true) => {
    let textureObjects = gameScene.sys.textures.list;
    if (textureObjects.hasOwnProperty(backgroundName) != true) {
        console.log(`Couldn't add background: '${backgroundName}'. Name not in texture list`);
        return;
    }
    let gameWidth = gameScene.sys.game.config.width;
    let gameHeight = gameScene.sys.game.config.height;
    let background = gameScene.add.image(0, 0, backgroundName);
    background.depth = -1;
    // Center bg
    background.setPosition(gameWidth / 2, gameHeight / 2);
    if (fitToScreen)
        background.setScale(gameWidth/background.width,gameHeight/background.height);
    return background;

}

export default {
    loadBackground,
    addBackground,
    calculateScaleToFillScreen,
    calculateCenter,
    getScreenCenter,
    getScreenCenterWidth,
    getScreenCenterHeight
};
